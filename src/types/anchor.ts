import { MouseEventHandler, ReactNode } from 'react';
import { Target } from './target';

export interface _Anchor {
  children: ReactNode;
  href: string;
  target: Target;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  font?: 'font-light ' | 'font-normal';
  size?: 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
}
