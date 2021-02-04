import { SlideCard } from '../../models';

interface Props {
  card: SlideCard;
}
const ProductItem = ({ card }: Props): JSX.Element => {
  const { id, days, destination, fromPriceBeautify, image, title, url } = card;
  return (
    <li>
      <span>ID: {id}</span>
      <span>Days: {days}</span>
      <span>Destination: {destination}</span>
      <span>FromPriceBeautify: {fromPriceBeautify}</span>
      <span>Image: {image.url}</span>
      <span>Title: {title}</span>
      <span>Url: {url}</span>
    </li>
  );
};

export default ProductItem;
