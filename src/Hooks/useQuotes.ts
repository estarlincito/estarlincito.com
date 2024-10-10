import Quote from '@/types/quote';
import { useEffect, useState } from 'react';

const useQuotes = () => {
  const [quotes, setQuotes] = useState([] as Quote[]);
  const [random, setRandom] = useState({} as Quote);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/estarlincito/iDB/quotes/data_en.json';

    (async () => {
      try {
        const res = await fetch(url);
        const quotes: Quote[] = await res.json();
        setQuotes(quotes);

        //Random Quote
        const random = Math.floor(Math.random() * quotes.length);
        setRandom(quotes[random]);
      } catch (error) {
        throw new Error(`May the ${url} is wrong`);
      }
    })();
  }, []);

  return { random, quotes };
};

export default useQuotes;
