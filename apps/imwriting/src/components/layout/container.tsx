import { Container as RadixContainer } from '@radix-ui/themes';
import React from 'react';
interface Props {
  children: React.ReactNode;
  size: '1' | '2' | '3' | '4';
}

const Container = (props: Props) => {
  return (
    <RadixContainer minHeight='90vh' size={props.size} mt='70px' mx='2'>
      {props.children}
    </RadixContainer>
  );
};

export default Container;
