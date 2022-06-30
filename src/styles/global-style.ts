import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  html, body{
  };
  h1{
    width:100%;
    padding-bottom: 10px;
    font-size: 2em;
    font-weight: Bolder;
    border-bottom: 1px solid ${(props) => props.theme.palette.daydream} ;
  };
  h2{
    font-size: 1.5em;
    font-weight: bold;
  };
  h3{
     font-size: 1.17em;
     font-weight: bold;
  };
`;
