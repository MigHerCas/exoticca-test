import styled from 'styled-components';

export const ProductItemCard = styled.div`
  min-height: 40rem;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  font-size: 0;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ProductContent = styled.div`
  background-color: #fff;
`;

export const TopContent = styled.div`
  position: relative;

  .top-content-wrapper {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    padding: 2rem;
    background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));

    .destination {
      font-size: 3rem;
      font-weight: 700;
    }

    .days {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
`;

export const BottomContent = styled.div`
  flex: 1;
  padding: 2rem;

  .title {
    font-size: 1.7rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
  }

  .desde {
    font-size: 1.6rem;
  }

  .price {
    font-size: 2.5rem;
    font-weight: 900;
  }
`;
