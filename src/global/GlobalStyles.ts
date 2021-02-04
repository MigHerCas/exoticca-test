import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .App {
    position: relative;
    min-height: 100vh;
    background-color: #2A2A2A;
    display: flex;
    flex-direction: column;
    padding: 5rem 3rem;

    @media (min-width: 1024px) {
      padding: 8rem 3rem 3rem 8rem;
    }

    &::before {
      content: '';
      position: absolute;
      height: 3rem;
      width: 100%;
      top: 0;
      left: 0;
      background-color: #B29662;

      @media (min-width: 1024px) {
        height: 100%;
        width: 5rem;
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 100vw;
      height: 3rem;
      bottom: 0;
      left: 0;
      background-color: #B29662;

      @media (min-width: 1024px) {
        height: 5rem;
        top: 0;
        left: 0;
      }
    }
  }

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
