import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTags = styled.div`
  display: none;
  overflow-x: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: -1.75rem;

  & :not(:first-child) {
    margin-left: 0.5rem;
  };

  @media (max-width: 1200px) {
    display: flex;
  };
`;

const Tag = styled(Link)`
  flex-shrink: 0;
  height: 1.5rem;
  font-size: 0.75rem;
  border-radius: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background: ${(props) => props.theme.palette.daydream};
  color: ${(props) => props.theme.palette.triconblack};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.5;
  text-decoration: none;

  &.selected {
    background: ${(props) => props.theme.palette.lobelia};
    color: ${(props) => props.theme.palette.extrawhite};
  }
 `;

function Tags({ postCount, tags }) {
  const [selectedId, setSelectedId] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const target = e.target.closest('a');
    setSelectedId(target.id);
  };

  // TODO
  // - [ ] 전체보기 카테고리 생기면 수정
  return (
    <StyledTags className="Tags" onClick={handleClick}>
      <Tag key="allCategories" to="/gallery" id="allCategories" className="Tag selected">
        전체보기
        <span>
          (
          {postCount}
          )
        </span>
      </Tag>
      {tags.map(({ _id, name, post }) => (
        <Tag key={_id} id={_id} to={`/gallery?tag=${_id}`} className={`Tag ${_id === selectedId ? 'selected' : null}`}>
          {name}
          <span>
            (
            {post}
            )
          </span>
        </Tag>
      ))}
    </StyledTags>
  );
}

export default Tags;
