import type { DetailedHTMLProps, OlHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

const Ol = ({ children }: Props) => <ol>{children}</ol>;

export default Ol;
