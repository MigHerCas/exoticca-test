export type MarketType = 'us' | 'uk' | 'es';

export interface ApiResponse {
  slides: Array<Slide>;
}

export interface Slide {
  cards: Array<SlideCard>;
  name: string;
}

export interface SlideCard {
  id: string;
  days: string;
  destination: string;
  fromPriceBeautify: string;
  image: Array<ImageObject>;
  title: string;
  url: string;
}

interface ImageObject {
  url: string;
}
