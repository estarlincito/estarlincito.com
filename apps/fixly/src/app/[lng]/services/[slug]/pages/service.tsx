import type { Services } from '@repo/content/.mdxlayer/fixly/generated';
import { loadTranslations } from '@repo/content/fixly/locales';
import type { Locale } from '@repo/content/utils/locales';
import { AspectRatio } from '@repo/ui/components/aspect-ratio';
import { Box } from '@repo/ui/components/box';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Heading } from '@repo/ui/components/heading';
import { Image } from '@repo/ui/components/image';
import { Summary } from '@repo/ui/components/summary';
import { Text } from '@repo/ui/components/text';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Share } from '@repo/ui/layouts/share';

import { ServiceButton } from '@/features/services/components/service-button';
import { ServiceContent } from '@/features/services/components/service-content';
import { toPrice } from '@/lib/price';

const Service = async ({
  description,
  urls,
  title,
  category,
  _body,
  cover,
  meta,
  price,
  coverAlt,
  lang,
}: Services) => {
  const { labels } = await loadTranslations(lang as Locale);

  return (
    <Container>
      <Breadcrumb
        links={[
          { label: labels.nav.services, route: urls.services },
          { label: category, route: urls.category },
        ]}
      />
      <Heading className='my-2' content={title} />
      <AspectRatio className='mt-5' ratio={16 / 9}>
        <Image alt={coverAlt} className='rounded-md' src={cover} />
      </AspectRatio>

      <Summary blockquote className='opacity-75' content={description} />

      <Flex className='items-center gap-2 my-5'>
        <Text as='span' className='font-semibold text-muted-foreground'>
          {labels.cta.price}:
        </Text>
        <Text as='span' className='font-bold text-foreground'>
          {toPrice(price, lang)}
        </Text>
      </Flex>

      <ServiceContent code={_body.code} />

      <Box className='my-5'>
        <ServiceButton label={labels.cta.orderNow} lng={lang} subject={title} />
      </Box>

      <Share
        category={category}
        description={description}
        url={meta.service.openGraph.url}
      />
    </Container>
  );
};

export default Service;
