import type { Services } from '@repo/content/.mdxlayer/fixly/generated';
import type { Locale } from '@repo/content/utils/locales';
import { AspectRatio } from '@repo/ui/components/aspect-ratio';
import { Box } from '@repo/ui/components/box';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Heading } from '@repo/ui/components/heading';
import { Image } from '@repo/ui/components/image';
import { Summary } from '@repo/ui/components/summary';
import { Text } from '@repo/ui/components/text';
import { withDefaultProps } from '@repo/ui/hocs/default-props';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Share } from '@repo/ui/layouts/share';
import { useMDXComponent } from 'next-mdxlayer/hooks';

import { ServiceButton } from '@/features/services/components/service-button';
import { toPrice } from '@/lib/price';

const Service = ({
  description,
  breadcrumb,
  title,
  category,
  _body,
  cover,
  meta,
  price,
  coverAlt,
  lang,
}: Services) => {
  const MDXComponent = useMDXComponent(_body.code);
  const priceLabel = { en: 'Price', es: 'Precio' };

  return (
    <Container>
      <Breadcrumb links={breadcrumb.service} />
      <Heading className='my-2' content={title} />
      <AspectRatio className='mt-5' ratio={16 / 9}>
        <Image alt={coverAlt} className='rounded-md' src={cover} />
      </AspectRatio>

      <Summary blockquote className='opacity-75' content={description} />

      <Flex className='items-center gap-2 my-5'>
        <Text as='span' className='font-semibold text-muted-foreground'>
          {priceLabel[lang as Locale]}:
        </Text>
        <Text as='span' className='font-bold text-foreground'>
          {toPrice(price, lang)}
        </Text>
      </Flex>
      <Flex className='flex-col mt-10 mb-5'>
        <MDXComponent
          components={{
            h2: withDefaultProps(Heading, { as: 'h2' }),
            p: Text,
          }}
        />
      </Flex>

      <Box className='my-5'>
        <ServiceButton lgn={lang} title={title} />
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
