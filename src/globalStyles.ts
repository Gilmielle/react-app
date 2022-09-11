import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants';
 
export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    font-size: 14px;
    line-height: 1.15;
    font-family: 'Ubuntu', sans-serif;
  }

  * {
    color: ${COLORS.mainText};
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
`;
 