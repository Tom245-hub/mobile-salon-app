import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, ul, li, h1, h2, h3, h4, h5, h6, p, hr {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    display: flex;
    flex-grow: 1;
  }

  section {
    flex-grow: 1;
    padding: 2rem;
  }

  a {
    text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.normal};
        cursor: pointer;
        transition: 0.2s ease-in-out;
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.dark};
        text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.primary.dark};
    }
  }

  li {
    list-style: none;
  }

`;

export default GlobalStyle;
