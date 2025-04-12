import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Link } from '@repo/ui';

import KoFi from '../../ko-fi';

const Hireme = () => (
  <Flex gapX='2'>
    <Link href='https://x.com/estarlincito' target='_blank'>
      <IconButton color='blue' variant='soft'>
        <TwitterLogoIcon />
      </IconButton>
    </Link>
    <Link
      href='https://github.com/estarlincito/estarlincito.com/blob/main/apps/imwriting/README.md'
      target='_blank'
    >
      <IconButton color='gray' variant='soft'>
        <GitHubLogoIcon />
      </IconButton>
    </Link>

    <Box display={{ initial: 'block', sm: 'none' }}>
      <KoFi />
    </Box>
  </Flex>
);

export default Hireme;
