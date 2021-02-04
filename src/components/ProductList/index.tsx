import React from 'react';
import useDataFetch from '../../hooks/useDataFetch';
import ProductItem from '../ProductItem';
import { ProductListHeading, ProductListWrapper } from './styled';

const ProductList = (): JSX.Element => {
  const { slide, isLoading } = useDataFetch('us');
  console.log('Slides: ', slide);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section>
      <ProductListWrapper>
        <ProductListHeading>{slide?.name}</ProductListHeading>
        <ol>
          {slide?.cards?.length &&
            slide.cards?.map((card) => <ProductItem key={card.id} card={card} />)}
        </ol>
      </ProductListWrapper>
    </section>
  );
};

export default ProductList;
