import type { Locale } from '@repo/content/utils/locales';
import { getBucketName } from '@repo/lib/bucket';
import { Avatar } from '@repo/ui/components/avatar';
import { Link } from '@repo/ui/components/link';
import { Separator } from '@repo/ui/components/separator';
import { Text } from '@repo/ui/components/text';
import { cn } from '@repo/ui/lib/utils';

export interface BrandProps {
  siteName: string;
  lng: Locale;
}

export const Brand = ({ siteName, lng }: BrandProps) => (
  <Link
    className={cn(
      'font-bold',
      'text-xl',
      'flex items-center justify-center gap-x-2 w-fit',
    )}
    route={`/${lng}`}
    variant='default'
  >
    <Avatar
      className='w-9 h-9 text-xl'
      fallback='E'
      src={`https://cdn.estarlincito.com/${getBucketName(siteName)}/assets/favicons/android-chrome-512x512.png`}
    />
    <Text as='span'>{siteName}</Text>
    <Separator orientation='vertical' />
  </Link>
);
