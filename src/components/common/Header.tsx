import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { theme } from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import getUser from './UserList';
import GetUser from './UserList';
import GitHubOauth from './../auth/GitHubOauth';

const LOGIN_URL = 'http://ec2-3-128-87-34.us-east-2.compute.amazonaws.com/auth/github';
const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.palette.triconblack};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;

  & .logo {
    font-size: 40px;
  }
  & a {
    color: ${(props) => props.theme.palette.extrawhite};

    text-decoration: none;
    margin: 10px;
  }
  button {
    background-color: none;
    border: none;
  }
  .hamburger-bar {
    color: ${(props) => props.theme.palette.extrawhite};
    margin: 20px;
  }

  /* .hamburger-bar {
    display: none;
  } */
  @media ${(props) => props.theme.devices.desktop} {
    .hamburger-bar {
      display: none;
    }
  }

  @media ${(props) => props.theme.devices.mobile} {
    .login-info {
      display: none;
    }

    .hamburger-bar {
      display: box;
      cursor: pointer;
    }
    .hamburger-member {
      display: none;
    }

    .hamburger-bar:hover {
      .hamburger-member {
        display: flex;
        background-color: ${(props) => props.theme.palette.lobelia};
        flex-direction: column;
        display: flex;
        align-items: flex-start;
        position: absolute;
        right: 0;
        z-index: 100;
        border-radius: 30px;
        padding: 0.2rem;
        & li {
          color: ${(props) => props.theme.palette.extrawhite};
          display: flex;
          flex-direction: flex-start;
          justify-content: center;
          align-items: center;
          & a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        & img {
          border-radius: 100%;
          width: 38px;
          border: 3px solid ${(props) => props.theme.palette.extrawhite};
          margin-right: 10px;
        }
      }
    }
  }
`;

const Members = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & div {
    width: 11.5rem;
  }

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.extrawhite};
  }

  & ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  & li a {
    color: ${(props) => props.theme.palette.extrawhite};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    border-radius: 100%;
    width: 38px;
    border: 3px solid ${(props) => props.theme.palette.extrawhite};
    margin: 10px;
  }
  @media ${(props) => props.theme.devices.mobile} {
    display: none;
  }
`;

export default function Header() {
  return (
    <Container>
      <Info>
        <a className='logo' href='/'>
          🎨 CHECKLIST GALLERY
        </a>
        <div className='login-info'>
          <GitHubOauth />
        </div>
        <ul href='#' className='hamburger-bar'>
          <FontAwesomeIcon icon={faBars} />
          <div className='hamburger-member'>
            <GitHubOauth />
            <GetUser />
          </div>
        </ul>
      </Info>
      <Members>
        <div></div>
        <ul>
          <li>
            <a href='/gallery'>전체보기</a>
          </li>
          <GetUser />
        </ul>
      </Members>
    </Container>
  );
}
