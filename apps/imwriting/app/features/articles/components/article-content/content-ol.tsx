import type { DetailedHTMLProps, OlHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export const ContentOl = ({ children }: Props) => <ol>{children}</ol>;
