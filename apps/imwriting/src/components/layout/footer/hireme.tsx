import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, IconButton, Link } from '@radix-ui/themes';
import React from 'react';

const Hireme = () => {
  return (
    <Flex gapX='2'>
      <Link href='https://x.com/estarlincito' target='_blank'>
        <IconButton variant='soft' color='blue'>
          <TwitterLogoIcon />
        </IconButton>
      </Link>
      <Link
        href='https://github.com/estarlincito/imwriting.estarlincito.com'
        target='_blank'
      >
        <IconButton variant='soft' color='gray'>
          <GitHubLogoIcon />
        </IconButton>
      </Link>

      <Box display={{ initial: 'block', sm: 'none' }}>
        <Link href='https://ko-fi.com/estarlincito' target='_blank'>
          <Button variant='classic'>Donate</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Hireme;
