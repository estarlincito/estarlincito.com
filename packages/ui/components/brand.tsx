import { Avatar } from '@repo/ui/components/avatar';
import { Link } from '@repo/ui/components/link';
import { Separator } from '@repo/ui/components/separator';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';

export interface BrandProps {
  siteName: string;
}

export const Brand = ({ siteName }: BrandProps) => (
  <Flex asChild className='items-center justify-center gap-x-2 w-fit'>
    <Link
      className={cn(
        'font-bold',
        'hover:no-underline',
        'text-gray-900 dark:text-gray-200',
        'text-xl',
      )}
      route='/'
    >
      <Avatar
        className='w-9 h-9'
        fallback='E'
        src='/assets/favicons/android-chrome-512x512.png'
      />
      <Text as='span'>{siteName}</Text>
      <Separator orientation='vertical' />
    </Link>
  </Flex>
);
