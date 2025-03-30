import { Box } from '@radix-ui/themes';

import Nav from './nav';

export const Footer = () => {
  return (
    <Box asChild p='5'>
      <footer>
        <Nav />
      </footer>
    </Box>
  );
};
