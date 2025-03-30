import { Button, Flex, Link } from '@radix-ui/themes';
import React from 'react';

const Menu = () => {
  return (
    <Flex direction='row' justify='center' gapX='3'>
      <Link href='/'>
        <Button variant='outline'>Home</Button>
      </Link>

      <Link href='/articles'>
        <Button variant='outline'>Articles</Button>
      </Link>
      <Link href='/about'>
        <Button variant='outline'>About</Button>
      </Link>
    </Flex>
  );
};

export default Menu;
