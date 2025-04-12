import type { ComponentProps } from 'react';

import { Heading } from './radix.js';

type TitleProps = ComponentProps<typeof Heading>;

export const Title = ({
  content,
  weight,
  size,
  children,
  mb,
  ...props
}: TitleProps) => (
  <Heading
    as='h1'
    {...props}
    mb={mb ?? '3'}
    size={size ?? { initial: '8', xs: '9' }}
    weight={weight ?? 'regular'}
  >
    {children ?? content}
  </Heading>
);
