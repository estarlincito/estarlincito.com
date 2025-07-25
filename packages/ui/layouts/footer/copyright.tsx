import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { cn } from '@repo/ui/lib/utils';

export interface CopyrightProps {
  copyright: string;
}

export const Copyright = ({ copyright }: CopyrightProps) => (
  <Text as='span' className='opacity-70'>
    {copyright}
    &nbsp;
    <Link
      className={cn('font-bold p-0 text-inherit', 'hover:no-underline')}
      label='Estarlincito'
      route='https://estarlincito.com'
    />
  </Text>
);
