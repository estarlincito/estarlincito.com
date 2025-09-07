import {
  getServiceContent,
  type ServiceProps,
} from '@repo/content/fixly/services/service';
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
import CatchAll from '@repo/ui/pages/catch-all';

import { ServiceButton } from '@/features/services/components/service-button';
import { ServiceContent } from '@/features/services/components/service-content';
import { toPrice } from '@/lib/price';

const Service = async ({ params }: ServiceProps) => {
  const content = await getServiceContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container>
      <Breadcrumb links={content.links} />
      <Heading className='my-2' content={content.title} />
      <AspectRatio className='mt-5' ratio={16 / 9}>
        <Image
          alt={content.coverAlt}
          className='rounded-md'
          src={content.cover}
        />
      </AspectRatio>

      <Summary
        blockquote
        className='opacity-75'
        content={content.description}
      />

      <Flex className='items-center gap-2 my-5'>
        <Text as='span' className='font-semibold text-muted-foreground'>
          {content.cta.price}:
        </Text>
        <Text as='span' className='font-bold text-foreground'>
          {toPrice(content.price, content.lang)}
        </Text>
      </Flex>

      <ServiceContent code={content._body.code} />

      <Box className='my-5'>
        <ServiceButton
          label={content.cta.orderNow}
          lng={content.lang}
          subject={content.title}
        />
      </Box>

      <Share
        category={content.category}
        description={content.description}
        url={content.meta.service.openGraph.url}
      />
    </Container>
  );
};

export default Service;
