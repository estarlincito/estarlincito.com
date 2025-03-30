import { Heading } from '@radix-ui/themes';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H2 = ({ children }: Props) => {
  return (
    <Heading as='h2' weight='bold'>
      {children}
    </Heading>
  );
};

export default H2;
