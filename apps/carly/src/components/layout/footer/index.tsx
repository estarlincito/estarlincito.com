import { carly } from '@repo/constants';
import { Box, Link, Text } from '@repo/ui';

const { copyright } = carly;

const Footer = () => (
  <Box mt='3'>
    <Text align='center' as='p' size='3'>
      {copyright}
      &nbsp;
      <Link
        color='gray'
        href='https://estarlincito.com'
        target='_blank'
        weight='bold'
      >
        Estarlincito
      </Link>
    </Text>
  </Box>
);

export default Footer;
