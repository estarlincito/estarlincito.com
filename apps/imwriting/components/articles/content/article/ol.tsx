import type { DetailedHTMLProps, OlHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export const Ol = ({ children }: Props) => <ol>{children}</ol>;
