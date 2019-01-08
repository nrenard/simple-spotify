import { createGlobalStyle  } from 'styled-components';

import 'rc-slider/assets/index.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    font-family: 'Montserrat', sans-serif;
    background-color: #181818;
    color: #fff;
  }
`;
