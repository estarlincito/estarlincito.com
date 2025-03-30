import { Box, Heading, Link } from '@radix-ui/themes';
import React from 'react';

const Navbar = () => {
  return (
    <Box m='4'>
      <Heading>
        <Link href='/' underline='none'>
          Carly
        </Link>
      </Heading>
    </Box>
  );
};

export default Navbar;
