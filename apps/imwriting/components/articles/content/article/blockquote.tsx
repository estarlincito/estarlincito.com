import { Blockquote as B } from '@repo/ui/components/blockquote';
import type { BlockquoteHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;
export const Blockquote = ({ children }: Props) => (
  <B className='my-5'>{children}</B>
);
