import type { JSX, ReactNode } from 'react';

import { Link } from '@/components/ui/link.jsx';
import { Box, Flex, Heading } from '@/components/ui/radix.js';

interface Props {
  route: string;
  title: string;
  label: string;
  children: ReactNode;
}

export const Block = ({
  route,
  title,
  children,
  label,
}: Props): JSX.Element => (
  <Flex align='center' direction='column' gap='5' maxWidth='500px'>
    <Heading align='center' mb='2'>
      {title}
    </Heading>
    <Box>{children}</Box>
    <Link href={route}>{label}</Link>
  </Flex>
);
