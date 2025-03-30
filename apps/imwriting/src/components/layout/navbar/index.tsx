import { Box, Button, Flex, Link, Separator } from '@radix-ui/themes';
import React from 'react';

import Brand from './brand';
import Menu from './menu';

const Navbar = () => {
  return (
    <Box>
      <Flex
        direction='row'
        justify={{ initial: 'center', sm: 'between' }}
        p='5'
      >
        <Box display={{ initial: 'none', sm: 'block' }}>
          <Brand />
        </Box>
        <Menu />
        <Box display={{ initial: 'none', sm: 'block' }}>
          <Link href='https://ko-fi.com/estarlincito' target='_blank'>
            <Button variant='classic'>Donate</Button>
          </Link>
        </Box>
      </Flex>
      <Separator size='4' />
    </Box>
  );
};

export default Navbar;
