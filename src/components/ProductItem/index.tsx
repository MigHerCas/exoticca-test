import { SlideCard } from '../../models';
import { ProductItemCard, ImageWrapper, ProductContent, TopContent, BottomContent } from './styled';

interface Props {
  card: SlideCard;
}
const ProductItem = ({ card }: Props): JSX.Element => {
  const { days, destination, fromPriceBeautify, image, title } = card;
  return (
    <ProductItemCard>
      <ProductContent>
        <TopContent>
          <ImageWrapper>
            <img src={image[0].url} alt={`Portrait from: ${destination}`} />
          </ImageWrapper>
          <div className="top-content-wrapper">
            <h2 className="destination">{destination}</h2>
            <span className="days">{days} días</span>
          </div>
        </TopContent>
        <BottomContent>
          <h3 className="title">{title}</h3>
          <span className="desde">desde</span>
          <br />
          <span className="price">{fromPriceBeautify}</span>
        </BottomContent>
      </ProductContent>
    </ProductItemCard>
  );
};

export default ProductItem;
