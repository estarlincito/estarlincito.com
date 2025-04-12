'use client';
import { apiFetch, handleError, num } from '@estarlincito/utils';
import { useEffect, useState } from 'react';

import type Quote from '@/types/quote';

interface Return {
  quote: Quote;
  random: Quote;
  quotes: Quote[];
}

const useQuotes = (): Return => {
  const [quotes, setQuotes] = useState([] as Quote[]);
  const [quote, setQuote] = useState({} as Quote);
  const [random, setRandom] = useState({} as Quote);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/estarlincito/iDB/quotes/data_en.json';

    apiFetch({ method: 'GET', url })
      .then(async (response) => response.json())
      .then((data: Quote[]) => {
        setQuotes(data);

        // Random Quote
        const random_index = Math.floor(Math.random() * data.length);
        const _random = data[random_index];
        if (_random === undefined) return;
        setRandom(_random);

        // Last Quote
        const last = data[data.length - num('1')];

        // Mon, Wed, Fri, and Sun will show the last quote;
        // other days will be random
        const date = new Date();
        const day = date.getDay();
        // eslint-disable-next-line no-magic-numbers
        const item = [num('1'), num('3'), num('5'), num('7')].includes(day as 1)
          ? last
          : _random;
        if (item === undefined) return;
        setQuote(item);
      })
      .catch(() => handleError('Error fetching quotes:'));
  }, []);

  return { quote, quotes, random };
};

export default useQuotes;
