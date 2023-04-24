'use client';
import React, { useEffect, useState } from 'react';
import { Blockquote } from '@/components/HOC';
import { Highlight } from '@/types';

const Highlight = () => {
  const [highlight, sethighlights] = useState({} as Highlight);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/estarlincito/highlights/main/data.json'
      );

      const highlights: Highlight[] = await res.json();
      const random = Math.floor(Math.random() * highlights.length);
      sethighlights(highlights[random]);
    })();
  }, []);

  return (
    <>
      <Blockquote>
        {highlight.quote}
        <br />
        <span className='font-bold'>{highlight.author}</span>
      </Blockquote>
    </>
  );
};

export default Highlight;
