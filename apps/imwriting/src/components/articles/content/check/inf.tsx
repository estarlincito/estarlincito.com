import { Flex, Text } from '@repo/ui';
import type { ReactNode } from 'react';

interface Props {
  color?: 'sky' | 'gray' | 'blue' | 'red';
  label: string;
  children: ReactNode;
}

const Inf = ({ color, label, children }: Props) => (
  <Flex align='center' direction='row' gap='1' justify='center'>
    <Text asChild color={color}>
      {children}
    </Text>
    <Text>{label}</Text>
  </Flex>
);

export default Inf;
