import { Flex, Text } from '@radix-ui/themes';
import React from 'react';

interface Props {
  color?: 'sky' | 'gray' | 'blue' | 'red';
  label: string;
  children: React.ReactNode;
}

const Inf = ({ color, label, children }: Props) => {
  return (
    <Flex align='center' gap='1' justify='center' direction='row'>
      <Text asChild color={color}>
        {children}
      </Text>
      <Text>{label}</Text>
    </Flex>
  );
};

export default Inf;
