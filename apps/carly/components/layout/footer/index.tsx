import { copyright } from '@app/carly/settings';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';

export const Footer = () => (
  <footer className='p-5'>
    <Text className='text-center'>
      {copyright}
      &nbsp;
      <Link
        className='font-bold'
        route='https://estarlincito.com'
        target='_blank'
        variant='default'
      >
        Estarlincito
      </Link>
    </Text>
  </footer>
);
