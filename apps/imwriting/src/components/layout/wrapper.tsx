import { Flex } from '@radix-ui/themes';
import React from 'react';

interface Props {
  children: React.ReactNode;
  align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch';
}

const Wrapper = (props: Props) => {
  return (
    <Flex
      direction='column'
      gap='5'
      p='5'
      align={props.align}
      justify='center'
      minHeight='90vh'
    >
      {props.children}
    </Flex>
  );
};

export default Wrapper;
