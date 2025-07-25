import type { Services } from '@repo/content/.mdxlayer/fixly/generated';
import { getTranslations } from '@repo/content/fixly/locales';
import type { Locale } from '@repo/content/utils/locales';
import { AspectRatio } from '@repo/ui/components/aspect-ratio';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Image } from '@repo/ui/components/image';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { cn } from '@repo/ui/lib/utils';

import { ServiceButton } from '@/features/services/components/service-button';
import { toPrice } from '@/lib/price';

export const ServiceCard = async ({
  title,
  description,
  cover,
  coverAlt,
  price,
  lang,
  slugs,
}: Services) => {
  const t = await getTranslations(lang as Locale);

  return (
    <Card
      className={cn('hover:bg-muted duration-300', 'flex flex-col h-full pt-0')}
    >
      <CardContent className='p-0'>
        <AspectRatio className='overflow-hidden' ratio={16 / 9}>
          <Link route={`/services/${slugs.service}`} variant='default'>
            <Image alt={coverAlt} className='rounded-t-xl' src={cover} />
          </Link>
        </AspectRatio>
      </CardContent>
      <CardHeader className='flex-1'>
        <CardTitle>
          <Link route={`/services/${slugs.service}`} variant='default'>
            {title}
          </Link>
        </CardTitle>
        <CardDescription>
          {description.slice(0, 100)}
          {description.length > 100 ? '...' : null}{' '}
          <Link
            className='opacity-70'
            label={t('labels.cta.readMore')}
            route={`/services/${slugs.service}`}
          />
        </CardDescription>
      </CardHeader>

      <CardFooter className='justify-between mt-auto'>
        <Text as='span'>{toPrice(price, lang)}</Text>
        <CardAction>
          <ServiceButton lgn={lang} title={title} />
        </CardAction>
      </CardFooter>
    </Card>
  );
};
