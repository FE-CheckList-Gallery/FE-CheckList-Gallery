import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { postApi } from '../../lib/api';
import { ICategoryListProps, IAllPostProps } from '../../types/interface';

const StyledCodeEditor = styled(CodeEditor)`
  font-size: 14px;
  display: ${(props) => (props.openState ? 'block' : 'none')};
  border-radius: 4px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.palette.daydream};
  margin-bottom: 16px;
  margin-top: 4px;
`;

const TagLink = styled(Link)`
  text-decoration: none;
`;

const ContentBox = styled.div`
  margin-top: 60px;
  background-color: ${(props) => props.theme.palette.extrawhite};
`;

const CodeToggle = styled.button`
  border: none;
  cursor: pointer;
  font-size: 14px;
  background-color: ${(props) => (props.openState ? props.theme.palette.lobelia : props.theme.palette.africanviolet)};
  transition: 0.3s ease all;
  border-radius: 6px;
  margin-bottom: 10px;
  width: 80px;
  height: 24px;
  color: white;
`;

const BodyBox = styled.div`
  margin-bottom: 40px;
  font-size: 24px;
`;

const TagBox = styled.div`
  display:flex;
  margin-bottom: 40px;
  & a {
    margin-right: 10px;
    font-size: 16px;
    background-color: ${(props) => props.theme.palette.triconblack};
    color: white;
    border-radius: 10px;
    padding: 6px 12px;
    line-height: 20px;
    text-align: center;
  }
`;

const Line = styled.hr`
  margin: 24px 0;
`;

const DetailTitleBox = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const DetailContainer = styled.div`
  padding: 30px 30px;
  width: 100%;
  box-sizing: border-box;
`;

function Title({ title }: any) {
  return (
    <DetailTitleBox>
      <h2>{title}</h2>
      <Line />
    </DetailTitleBox>
  );
}

function Tags({ category }: ICategoryListProps) {
  const tagResult = category.map((tag) => <TagLink key={tag.children} to={`/gallery?tag=${tag.category._id}`}>{tag.category.name}</TagLink>);

  return (
    <TagBox>
      {tagResult}
    </TagBox>
  );
}

function Body({ description }) {
  return (
    <BodyBox>
      <p>{description}</p>
    </BodyBox>
  );
}

function CodeContainer({ code }) {
  const [openState, setOpenState] = useState<boolean>(true);

  function handleToggle() {

    setOpenState((cur) => !cur);
  }

  function CodeEditors() {
    const codes = code.map((file) => {
      async function readFile(curFile) {
        const read = await file.text();
        return read;
      }
      const text = readFile(file);
      const type = file.split('.').pop();

      return (
        <div>
          <p>{file}</p>
          <StyledCodeEditor
            openState={openState}
            value={text}
            padding={20}
            language={type}
            readOnly
          />
        </div>
      );
    });
    return <div>{codes}</div>;
  }

  return (
    <div>
      <CodeToggle openState={openState} onClick={handleToggle}>{openState ? '코드 접기' : '코드 보기'}</CodeToggle>
      <CodeEditors />
    </div>
  );
}

function Content({ code }) {
  return (
    <ContentBox>
      {code}
    </ContentBox>
  );
}

export default function Detail() {
  const [post, setPost] = useState<IAllPostProps>({});
  async function Data() {
    const { postId } = useParams();
    try {
      const res = await postApi.getPostById(postId);
      setPost(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    Data();
  }, []);

  return (
    <DetailContainer>
      <Title title={post.title} />
      <Tags category={post.categories} />
      <Body description={post.description} />
      <CodeContainer code={post.code} />
      <Content code={post.code} />
    </DetailContainer>
  );
}
