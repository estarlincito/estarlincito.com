import { Box, Separator } from '@radix-ui/themes';
import Nav from './nav';

const Footer = () => {
  return (
    <footer>
      <Box p='5'>
        <Separator my='5' size='4' />
        <Nav />
      </Box>
    </footer>
  );
};

export default Footer;
