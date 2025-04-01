import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Link } from '@radix-ui/themes';
import React from 'react';

import KoFi from '../../ko-fi';

const Hireme = () => {
  return (
    <Flex gapX='2'>
      <Link href='https://x.com/estarlincito' target='_blank'>
        <IconButton variant='soft' color='blue'>
          <TwitterLogoIcon />
        </IconButton>
      </Link>
      <Link
        href='https://github.com/estarlincito/estarlincito.com/blob/main/apps/imwriting/README.md'
        target='_blank'
      >
        <IconButton variant='soft' color='gray'>
          <GitHubLogoIcon />
        </IconButton>
      </Link>

      <Box display={{ initial: 'block', sm: 'none' }}>
        <KoFi />
      </Box>
    </Flex>
  );
};

export default Hireme;
