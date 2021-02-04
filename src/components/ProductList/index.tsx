import useDataFetch from '../../hooks/useDataFetch';

const ProductList = (): JSX.Element => {
  const { data, isLoading } = useDataFetch('us');
  console.log('Data: ', data);

  if (isLoading) return <h1>Loading...</h1>;

  return <h1>Finished!</h1>;
};

export default ProductList;
