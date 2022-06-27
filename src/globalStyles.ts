import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: teal;
    font-family: 'Red Hat Display', Helvetica, Sans-Serif;
    color: #fff;
  }
`;

export default GlobalStyle;