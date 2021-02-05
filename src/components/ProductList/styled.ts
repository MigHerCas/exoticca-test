import styled from 'styled-components';

export const ProductListHeading = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 2px;
  text-indent: 1rem;
  margin-bottom: 2rem;
`;

export const ProductListWrapper = styled.section`
  position: relative;

  .swiper-wrapper {
    list-style-type: none;
  }

  .swiper-slide {
    margin-bottom: 8rem;
  }

  .swiper-slide.spacer {
    padding: 0;
    margin: 0;
    display: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #b29662;
    display: none;
    background-color: #2a2a2a;
    top: 20rem;

    @media (min-width: 1024px) {
      display: flex;
      width: 5rem;
      text-align: center;
      height: 7rem;
    }
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-scrollbar {
    height: 1rem;
  }

  .swiper-scrollbar-drag {
    background-color: #b29662;
  }

  .swiper-pagination {
    bottom: 3rem;
  }

  .swiper-pagination-bullet {
    width: 1.2rem;
    height: 1.2rem;
  }

  .swiper-pagination-bullet-active {
    background-color: #b29662;
  }
`;

export const ProductListItem = styled.li``;

export const MarketSelector = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  /* transform: translateY(50%); */

  font-size: 1.5rem;
  background-color: #b29662;
  padding: 1rem;
  color: #2a2a2a;
`;
