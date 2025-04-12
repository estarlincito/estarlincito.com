import { Heading } from '@repo/ui';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H2 = ({ children }: Props) => (
  <Heading as='h2' weight='bold'>
    {children}
  </Heading>
);

export default H2;
