import { Heading } from '@repo/ui/components/heading';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const H2 = ({ children }: Props) => (
  <Heading as='h2'>{children}</Heading>
);
