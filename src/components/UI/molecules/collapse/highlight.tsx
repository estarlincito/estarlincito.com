'use client';
import React, { useEffect, useState } from 'react';
import { Blockquote } from '@/components/HOC';

//Types
interface Highlight {
  title: string;
  quote: string;
  author: string;
  url: string;
}

const Highlight = () => {
  const [highlight, sethighlights] = useState({} as Highlight);
  const url =
    'https://raw.githubusercontent.com/estarlincito/highlights/main/docs/assets/data.json';

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
    <>
      <Blockquote>
        {highlight.quote}
        <br />
        <span className='font-bold'>-{highlight.author}-</span>
      </Blockquote>
    </>
  );
};

export default Highlight;
