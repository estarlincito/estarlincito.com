import { Container as Containerr } from '@radix-ui/themes';
import React from 'react';
interface ContainerProps {
  children: React.ReactNode;
  size: '1' | '2' | '3' | '4';
}

const Container = (props: ContainerProps) => {
  return (
    <Containerr minHeight={'80vh'} size={props.size} p='5' mt='9'>
      {props.children}
    </Containerr>
  );
};

export default Container;
