import { imwriting } from '@repo/constants';
import { Link, Text } from '@repo/ui';

const Copyright = () => (
  <Text as='p' size='3'>
    {imwriting.copyright}
    &nbsp;
    <Link color='gray' href='/' target='_self' weight='bold'>
      Estarlincito
    </Link>
  </Text>
);

export default Copyright;
