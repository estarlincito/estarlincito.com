import { Flex } from '@repo/ui';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';
}

const Wrapper = (props: Props) => (
  <Flex
    align={props.align}
    direction='column'
    gap='5'
    justify='center'
    minHeight='90vh'
    p='5'
  >
    {props.children}
  </Flex>
);

export default Wrapper;
