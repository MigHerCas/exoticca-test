import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 3rem;
  max-width: 136rem;

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
  margin-bottom: 3rem;
`;

export const Main = styled.main``;
