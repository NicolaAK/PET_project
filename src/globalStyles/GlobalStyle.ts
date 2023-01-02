import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
// @ts-ignore
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    @font-face {
      font-family: "Roboto";
      src: local("Roboto"), url(${RobotoRegular});
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: "Roboto";
      src: local("Roboto-Medium"), local("RobotoMedium"), url(${RobotoMedium});
      font-weight: 500;
      font-display: swap;
    }
    font: inherit;
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1.25;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input {
    -webkit-appearance: none;
    box-shadow: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    color: inherit;
  }
  
  a {
    color: inherit;
  }
  
  .scroll-bar>div:first-child{
        overflowX : hidden !important
    }
    .scroll-bar>div:first-child::-webkit-scrollbar{
        background: transparent;
    }
`;

export default GlobalStyle;
