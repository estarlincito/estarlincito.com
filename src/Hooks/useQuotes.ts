import Quote from '@/types/quote';
import { useEffect, useState } from 'react';

const useQuotes = () => {
  const [quote, setquote] = useState({} as Quote);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/estarlincito/iDB/quotes/data_en.json';

    (async () => {
      try {
        const res = await fetch(url);
        const quote: Quote[] = await res.json();
        const random = Math.floor(Math.random() * quote.length);
        setquote(quote[random]);
      } catch (error) {
        throw new Error(`May the ${url} is wrong`);
      }
    })();
  }, []);

  return quote;
};

export default useQuotes;
