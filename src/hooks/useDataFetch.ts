import { useEffect, useState } from 'react';
import { MarketType, Slide } from '../models/index';

type HookReturns = {
  data: Slide | undefined;
  isLoading: boolean;
  isError: boolean;
};

function getMarketApiUrl(marketType: MarketType): string {
  const firstURLFragment = process.env.REACT_APP_FIRST_FRAGMENT_API_URL;
  const lastURLFragment = process.env.REACT_APP_LAST_FRAGMENT_API_URL;

  return [firstURLFragment, marketType, lastURLFragment].join('');
}

const useDataFetch = (marketType: MarketType = 'us'): HookReturns => {
  const [data, setData] = useState<Slide>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const processedUrl = getMarketApiUrl(marketType);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(`${processedUrl}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        const dataJson = await response;
        const newData = await dataJson.json();

        setData(newData);
      } catch (error) {
        setIsError(true);
        return error;
      }

      setIsLoading(false);
    };

    fetchData();
  }, [processedUrl]);

  return { data, isLoading, isError };
};

export default useDataFetch;
