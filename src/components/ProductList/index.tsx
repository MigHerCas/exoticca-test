import React, { useState } from 'react';
import useDataFetch from '../../hooks/useDataFetch';
import ProductItem from '../ProductItem';
import { ProductListHeading, ProductListWrapper, MarketSelector } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { MarketType } from '../../models';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductList = (): JSX.Element => {
  const [selectedMarket, setSelectedMarket] = useState<MarketType>('us');
  const { slide, isLoading } = useDataFetch(selectedMarket);

  console.log(selectedMarket);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any): void => {
    setSelectedMarket(e.target.value);
  };

  if (isLoading) return <h1>Loading...</h1>;

  const swiperBreakpoints = {
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3.2,
    },
  };

  return (
    <ProductListWrapper>
      <ProductListHeading>{slide?.name}</ProductListHeading>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <MarketSelector
        name="market"
        id="market"
        defaultValue={selectedMarket}
        value={selectedMarket}
        onChange={(e) => handleChange(e)}
      >
        <option value="uk">British Market</option>
        <option value="es">Spanish Market</option>
        <option value="us">American Market</option>
      </MarketSelector>
      <Swiper
        spaceBetween={30}
        wrapperTag="ol"
        slidesPerView={1.3}
        navigation
        breakpoints={swiperBreakpoints}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log('Swiper: ', swiper)}
      >
        {slide?.cards?.length &&
          slide.cards?.map((card) => (
            <SwiperSlide key={card.id} tag="li">
              <ProductItem card={card} />
            </SwiperSlide>
          ))}
        {/* Spacer */}
        <SwiperSlide tag="li" className="spacer" />
      </Swiper>
    </ProductListWrapper>
  );
};

export default ProductList;
