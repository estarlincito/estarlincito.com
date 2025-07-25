import { cn } from '@repo/ui/lib/utils';
import type { BlockquoteHTMLAttributes } from 'react';

interface BlockquoteProps
  extends Pick<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    'className' | 'content' | 'children'
  > {
  unstyled?: boolean;
}

export const Blockquote = ({
  className,
  content,
  children,
  unstyled,
}: BlockquoteProps) => (
  <blockquote
    className={cn(!unstyled && 'mt-6 border-l-2 pl-6 italic', className)}
  >
    {children ?? content}
  </blockquote>
);
