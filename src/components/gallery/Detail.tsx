import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { postApi } from '../../lib/api';
// import {Javascript} from '@codemirror/lang-javascript';

// const data = {
//   _id: '62a9dc99780410333bcfaab2',
//   title: 'components',
//   description: '컴포넌트들입니다.',
//   categories: [
//     {
//       category: {
//         _id: '62a8d421e03a17e54baca22e',
//         name: 'React',
//         lowerName: 'react',
//         post: 7,
//         __v: 0,
//       },
//       _id: '62a9dc99780410333bcfaab3',
//     },
//     {
//       category: {
//         _id: '62a8d9c12fa2d26afba46c27',
//         name: 'Component',
//         lowerName: 'component',
//         post: 2,
//         __v: 0,
//       },
//       _id: '62a9dc99780410333bcfaab4',
//     },
//   ],
//   code: ['console.log(bla)'],
//   author: null,
//   createdAt: '2022-06-15T13:20:25.450Z',
//   updatedAt: '2022-06-15T13:20:25.450Z',
//   __v: 0,
// };

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
  const tagResult = tagBox.map((tag) => <TagLink to="/">{tag.category.name}</TagLink>);

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

  return (
    <div>
      <CodeToggle openState={openState} onClick={handleToggle}>{openState ? '코드 접기' : '코드 보기'}</CodeToggle>
      <CodeMirror
        value={code}
        height="200px"
        // extensions={[Javascript({ jsx: true })]}
        readOnly
        style={{
          fontSize: 14,
          display: openState ? 'block' : 'none',
        }}
      />
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

export default async function Detail() {
  const { postId } = useParams();
  console.log(postId);
  const res = await postApi.getPostById(postId);
  console.log(res);

  return (
    <DetailContainer>
      {/* 제목 */}
      <Title title={data.title} />

      {/* 태그 */}
      <Tags categories={data.categories} />

      {/* 내용 */}
      <Body description={data.description} />

      {/* 코드창 */}
      <CodeContainer code={data.code} />

      {/* 컨텐츠 */}
      <Content code={data.code} />

    </DetailContainer>
  );
}

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