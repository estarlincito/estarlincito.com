import React, { DetailedHTMLProps, OlHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

const Ol = ({ children }: Props) => {
  return <ol>{children}</ol>;
};

export default Ol;
