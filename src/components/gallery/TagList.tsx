import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTagList = styled.div`
    position: absolute;
    width: 11.5rem;
    left: -13.5rem;
    margin-top: 2rem;

    & .title {
        font-size: 1rem;
        line-height: 1.5;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${(props) => props.theme.palette.triconblack};
        margin-bottom: 1rem;
        color: ${(props) => props.theme.palette.triconblack};
        font-weight: bold;
    };

    & ul :not(:first-child) {
      margin-top: 0.25rem;
    };

    @media (max-width: 1200px) {
      display: none;
    };
`;

const Tag = styled.li`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${(props) => props.theme.palette.triconblack};
  font-weight: bold;

  & span {
      margin-left: 0.5rem;
      color: ${(props) => props.theme.palette.daydream};
      font-weight: normal;
  };
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover {
    text-decoration: underline;
  };
  
  &.selected {
    color: ${(props) => props.theme.palette.lobelia};
    font-weight: bold;
  }
`;

function TagList({ postCount, tags }) {
  const [selectedId, setSelectedId] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (e.target.nodeName === 'A') {
      setSelectedId(e.target.id);
    }
  };

  // TODO
  // - [ ] 전체보기 카테고리 생기면 수정
  return (
    <StyledTagList className="TagList" onClick={handleClick}>
      <div>
        <div className="title">태그 목록</div>
        <ul>
          <Tag key="allCategories">
            <StyledLink to="/gallery" id="allCategories" className="Tag selected">전체보기</StyledLink>
            <span>
              (
              {postCount}
              )
            </span>
          </Tag>
          {tags.map(({ _id, name, post }) => (
            <Tag key={_id} className="Tag">
              <StyledLink to={`/gallery?tag=${_id}`} id={_id} className={`${_id === selectedId ? 'selected' : null}`}>{name}</StyledLink>
              <span>
                (
                {post}
                )
              </span>
            </Tag>
          ))}
        </ul>
      </div>
    </StyledTagList>
  );
}

export default TagList;
