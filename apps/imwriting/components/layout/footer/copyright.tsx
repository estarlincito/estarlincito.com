import { copyright } from '@app/imwriting/settings';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { cn } from '@repo/ui/lib/utils';

export const Copyright = () => (
  <Text as='span' className='opacity-70'>
    {copyright}
    &nbsp;
    <Link
      className={cn('font-bold p-0 text-inherit', 'hover:no-underline')}
      label='Estarlincito'
      route='/'
    />
  </Text>
);
