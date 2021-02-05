import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 3rem;
  max-width: 136rem;

  @media (min-width: 1200px) {
    padding: 10rem 3rem 3rem 10rem;
  }

  &::before {
    content: '';
    position: absolute;
    height: 3rem;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #b29662;

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
    background-color: #b29662;

    @media (min-width: 1024px) {
      height: 5rem;
      top: 0;
      left: 0;
    }
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 5rem;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Main = styled.main``;
