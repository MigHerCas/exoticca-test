import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Red Hat Text', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 62.5%; // 1rem -> 10px
  }

  html,
  body {
    min-height: 100vh;
    margin: 0;
    scroll-behavior: smooth;
    background-color: #2a2a2a;
  }

  /*
    * Reset top margins on titles that are first-child.
  */
  h1,
  h2,
  h3 {
    color: var(--color-opposite);
    &:first-child {
      margin-top: 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
