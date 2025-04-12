import type { ComponentProps } from 'react';

import { Heading } from './radix.js';

type SubTitleProps = ComponentProps<typeof Heading>;

export const SubTitle = ({
  content,
  size,
  children,
  weight,
  mb,
  ...props
}: SubTitleProps) => (
  <Heading
    as='h3'
    weight={weight ?? 'medium'}
    {...props}
    mb={mb ?? '2'}
    size={size ?? '4'}
  >
    {children ?? content}
  </Heading>
);
