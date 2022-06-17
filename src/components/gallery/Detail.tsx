import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
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
  const tagBox = categories;
  const tagResult = tagBox.map((tag) => {
    const catId = tag.category._id; // 카테고리 ID
    return <TagLink to="/">{tag.category.name}</TagLink>;
  });

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
        value={code.join('\n')}
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
  const res = await axios.get(`https://fcgserver.loca.lt/post/${postId}`);
  console.log(res);
  const { data } = res.data;

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
