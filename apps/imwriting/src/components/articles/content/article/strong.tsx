import { Strong as StrongRadix } from '@radix-ui/themes';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Strong = ({ children }: Props) => {
  return <StrongRadix>{children}</StrongRadix>;
};

export default Strong;
