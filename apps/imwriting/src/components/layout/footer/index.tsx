import { Box, Flex, Separator } from '@radix-ui/themes';
import React from 'react';

import Brand from '../navbar/brand';
import Copyright from './copyright';
import Hireme from './hireme';
import ThemeToggle from './theme';

const Footer = () => {
  return (
    <Box mt='5'>
      <Separator size='4' />
      <Box p='5' asChild>
        <footer>
          <Flex
            gap='5'
            justify='between'
            align={{ initial: 'start', md: 'center' }}
            direction={{ initial: 'column', md: 'row' }}
          >
            <Box display={{ initial: 'block', sm: 'none' }}>
              <Brand />
            </Box>
            <Hireme />
            <ThemeToggle />
          </Flex>

          <Box mt='3'>
            <Copyright />
          </Box>
        </footer>
      </Box>
    </Box>
  );
};

export default Footer;
