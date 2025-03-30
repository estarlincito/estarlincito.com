import { Code as CodeRadix } from '@radix-ui/themes';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Code = ({ children }: Props) => {
  return <CodeRadix>{children}</CodeRadix>;
};

export default Code;
