import type { Locale } from '@repo/content/shared/locales';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { cn } from '@repo/ui/lib/utils';

export interface CopyrightProps {
  copyright: string;
  lng: Locale;
}

export const Copyright = ({ copyright, lng }: CopyrightProps) => (
  <Text as='span' className='opacity-70'>
    {copyright}
    &nbsp;
    <Link
      className={cn('font-bold p-0 text-inherit', 'hover:no-underline')}
      label='Estarlincito'
      route={`https://estarlincito.com/${lng}`}
    />
  </Text>
);
