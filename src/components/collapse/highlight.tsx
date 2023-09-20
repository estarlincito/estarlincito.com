'use client';
import { Blockquote, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

interface Highlight {
  title: string;
  quote: string;
  author: string;
  url: string;
}

const Highlight = () => {
  const [highlight, sethighlights] = useState({} as Highlight);
  const url =
    'https://raw.githubusercontent.com/estarlincito/iDB/quotes/data_es.json';

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const highlights: Highlight[] = await res.json();
        const random = Math.floor(Math.random() * highlights.length);
        sethighlights(highlights[random]);
      } catch (error) {
        throw new Error(`May the ${url} is wrong`);
      }
    })();
  }, []);

  return (
    <Blockquote>
      {highlight.quote}
      <br />
      {highlight.author === '...' ? null : (
        <Text as='span' weight='bold'>
          -{highlight.author}-
        </Text>
      )}
    </Blockquote>
  );
};

export default Highlight;
