import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, ul, li, h1, h2, h3, h4, h5, h6, p, hr {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }


  body {
    font-family: ${props => props.theme.fonts.primary};
  }

  a {
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
  }

  li {
    list-style: none;
  }

`;

export default GlobalStyle;