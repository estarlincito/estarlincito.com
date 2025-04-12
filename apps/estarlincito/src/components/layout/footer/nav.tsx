import { estarlincito } from '@repo/constants';
import { Flex, Link, Separator, Text } from '@repo/ui';
const { copyright } = estarlincito;

const Copyright = () => (
  <Text as='p' size='3'>
    {copyright}
    &nbsp;
    <Link color='gray' href='/' target='_self' weight='bold'>
      Estarlincito
    </Link>
  </Text>
);

const Nav = () => (
  <Flex align='center' direction='column' gap='5'>
    <Separator size='4' />
    <Copyright />
  </Flex>
);

export default Nav;
