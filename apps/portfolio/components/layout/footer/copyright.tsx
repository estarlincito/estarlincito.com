import { copyright, url } from '@app/portfolio/settings';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';

export const Copyright = () => (
  <Text className='opacity-80'>
    {copyright}
    &nbsp;
    <Link className='font-bold' route={url} target='_blank' variant='default'>
      Estarlincito
    </Link>
  </Text>
);
