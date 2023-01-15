import { createGlobalStyle } from 'styled-components';

import RalewayLight from '../assets/fonts/Raleway-Light.ttf';
import RalewayBold from '../assets/fonts/Raleway-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
  
    @font-face {
      font-family: "Raleway";
      src: local("Raleway-Bold"), local("RalewayBold"), url(${RalewayBold});
      font-weight: 700;
      font-display: swap;
    }
    @font-face {
      font-family: "Raleway";
      src: local("Raleway"), url(${RalewayLight});
      font-weight: 300;
      font-display: swap;
    }

    
    font: inherit;
    font-size: 100%;
    font-family: 'Raleway', sans-serif;
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
