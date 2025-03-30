import { Blockquote as Blockquote_ } from '@radix-ui/themes';
import React, { BlockquoteHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;
const Blockquote = ({ children }: Props) => {
  return <Blockquote_ my='5'>{children} </Blockquote_>;
};

export default Blockquote;
