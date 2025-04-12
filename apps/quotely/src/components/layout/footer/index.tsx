import { Box, Flex, Separator, ThemeToggle } from '@repo/ui';

import Copyright from './copyright';

const Footer = () => (
  <Box>
    <Separator size='4' />
    <Box asChild p='5'>
      <footer>
        <Flex
          align='center'
          direction={{ initial: 'column', md: 'row' }}
          gap='5'
          justify='between'
        >
          <ThemeToggle />
          <Copyright />
        </Flex>
      </footer>
    </Box>
  </Box>
);

export default Footer;
