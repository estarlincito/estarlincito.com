import { Blockquote as BlockquoteRadix } from '@repo/ui';
import type { BlockquoteHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;
const Blockquote = ({ children }: Props) => (
  <BlockquoteRadix my='5'>{children} </BlockquoteRadix>
);

export default Blockquote;
