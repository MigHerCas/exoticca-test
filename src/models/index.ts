export type MarketType = 'us' | 'uk' | 'es';

export interface Slide {
  cards: Array<SlideCard>;
  name: string;
}

export interface SlideCard {
  id: string;
  days: string;
  destination: string;
  fromPriceBeautify: string;
  image: string;
  title: string;
  url: string;
}
