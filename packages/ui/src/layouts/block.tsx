import { Box, Flex, Heading, Link } from '@radix-ui/themes';
import React from 'react';

interface Props {
  route: string;
  title: string;
  label: string;
  children: React.ReactNode;
}

export const Block = ({ route, title, children, label }: Props) => {
  return (
    <Flex direction='column' align='center' maxWidth='500px' gap='5'>
      <Heading align='center' mb='2'>
        {title}
      </Heading>
      <Box>{children}</Box>
      <Link href={route}>{label}</Link>
    </Flex>
  );
};
