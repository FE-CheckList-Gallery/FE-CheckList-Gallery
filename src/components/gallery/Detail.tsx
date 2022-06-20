import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { postApi } from '../../lib/api';
import CodeEditor from '@uiw/react-textarea-code-editor';
import {IAllPostProps} from '../../types/interface';

function Title({ title }) {
  return (
    <DetailTitleBox>
      <h2>{title}</h2>
      <Line />
    </DetailTitleBox>
  );
}

function Tags({ categories }) {
  const tagBox = categories; // fetch로 받아와야 함
  // tagBox span으로 묶기
  const tagResult = tagBox.map((tag) => <TagLink key={tag.children} to="#">{tag.category.name}</TagLink>);

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
    const codes = code.map(file => {
      async function readFile(curFile) {
        const read = await file.text();
        return read;
      }
      const text = readFile(file); 
      const type = file.split('.').pop();
      console.log(text);

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
    return <div>{codes}</div>
  }

  return (
    <div>
      <CodeToggle openState={openState} onClick={handleToggle}>{openState ? '코드 접기' : '코드 보기'}</CodeToggle>
      <CodeEditors/>
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

  useEffect(() => {
    async function Data() {
      const { postId } = useParams();
      try {
        const res = await postApi.getPostById(postId);
        setPost(() => res);
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  return (
    <DetailContainer>
      {/* 제목 */}
      <Title title={post.title} />

      {/* 태그 */}
      <Tags categories={post.categories} />

      {/* 내용 */}
      <Body description={post.description} />

      {/* 코드창 */}
      <CodeContainer code={post.code} />

      {/* 컨텐츠 */}
      <Content code={post.code} />

    </DetailContainer>
  );
}

// const CodeTitle = styled.p`
//   display: ${}
// `

const StyledCodeEditor = styled(CodeEditor)`
  font-size: 14px;
  display: ${(props) => props.openState ? 'block' : 'none'};
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
