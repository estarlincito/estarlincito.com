import { Box, Link, Title } from '@repo/ui';

const Navbar = () => (
  <Box m='4'>
    <Title asChild>
      <Link href='/' underline='none'>
        Carly
      </Link>
    </Title>
  </Box>
);

export default Navbar;
