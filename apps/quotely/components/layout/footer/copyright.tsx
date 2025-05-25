import { copyright } from '@app/quotely/settings';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';

export const Copyright = () => (
  <Text className='opacity-90'>
    {copyright}
    &nbsp;
    <Link className='font-bold' route='/' target='_self' variant='default'>
      Estarlincito
    </Link>
  </Text>
);
