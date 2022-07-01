import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams, Link } from 'react-router-dom';
import { userApi } from '@lib/api';
import { IAuthorProps } from '@interfaces/interface';

const AuthorList = styled.li``;

const AuthorLink = styled(Link)<{ismatch: string | undefined}>`
  font-size: 1.5vw;
  border-bottom: ${(props) => (props.ismatch ? `3px solid ${props.theme.palette.africanruby}` : null)};
`;

const AuthorImg = styled.img`
  width: 3.5vw;
`;

function getUser() {
  const [users, setUsers] = useState<IAuthorProps[]>([]);
  const [params] = useSearchParams();
  const authorId = params.get('auth');

  const getUsersFromApi = async () => {
    try {
      const { data } = await userApi.getAllUser();
      setUsers(data);
    } catch (e: any) {
      alert(e);
    }
  };

  useEffect(() => {
    getUsersFromApi();
  }, []);

  const usersList = users.map((user) => (
    <AuthorList key={user._id}>
      <AuthorLink ismatch={authorId === user._id ? 'true' : undefined} to={`gallery?auth=${user._id}`}>
        <AuthorImg src={user.avatar} />
        {user.username}
      </AuthorLink>
    </AuthorList>
  ));
  return (
    <>
      {usersList}
    </>
  );
}

export default getUser;
