import { Box, Flex, Separator } from '@radix-ui/themes';
import React from 'react';

import Brand from '../../brand';
import KoFi from '../../ko-fi';
import Menu from './menu';

const Navbar = () => {
  return (
    <Box mb='7'>
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
          <KoFi />
        </Box>
      </Flex>
      <Separator size='4' />
    </Box>
  );
};

export default Navbar;
