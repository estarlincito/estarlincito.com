import { Box, Link, Text } from '@radix-ui/themes';
import { carly } from '@repo/constants';
import React from 'react';
const { copyright } = carly;

const Footer = () => {
  return (
    <Box mt='3'>
      <Text as='p' size='3' align='center'>
        {copyright}
        &nbsp;
        <Link
          color='gray'
          weight='bold'
          href='https://estarlincito.com'
          target='_blank'
        >
          Estarlincito
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
