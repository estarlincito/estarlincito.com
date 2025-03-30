import { Flex, Link, Separator, Text } from '@radix-ui/themes';
import { estarlincito } from '@repo/constants';
const { copyright } = estarlincito;

const Copyright = () => {
  return (
    <Text as='p' size='3'>
      {copyright}
      &nbsp;
      <Link color='gray' weight='bold' href='/' target='_self'>
        Estarlincito
      </Link>
    </Text>
  );
};

const Nav = () => {
  return (
    <Flex direction='column' gap='5' align='center'>
      <Separator size='4' />
      <Copyright />
    </Flex>
  );
};

export default Nav;
