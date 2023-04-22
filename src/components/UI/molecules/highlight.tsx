'use client';
import React, { useEffect, useState } from 'react';
import { Blockquote } from '@/components/HOC';

interface _highlight {
  title: string;
  quote: string;
  author: string;
  url: string;
}

const Highlight = () => {
  const [highlight, sethighlights] = useState({} as _highlight);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/estarlincito/highlights/main/data.json'
      );

      const highlights: _highlight[] = await res.json();
      const random = Math.floor(Math.random() * highlights.length);
      sethighlights(highlights[random]);
    })();
  }, []);

  return (
    <>
      <Blockquote>&ldquo;{highlight.quote}&rdquo;</Blockquote>
      <span>
        <b>{highlight.author}</b>
      </span>
    </>
  );
};

export default Highlight;
