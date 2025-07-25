import type { Services } from '@repo/content/.mdxlayer/fixly/generated';
import type { SearchParams } from '@repo/types';
import { Box } from '@repo/ui/components/box';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Gallery } from '@repo/ui/layouts/gallery';
import { getPaginationData } from '@repo/ui/lib/pagination';

import { ServiceCard } from './service-card';

interface ServiceListProps extends SearchParams {
  services: Services[];
  route: string;
}

export const ServiceList = async ({
  limit,
  offset,
  services,
  route,
}: ServiceListProps) => {
  const { data, ...rest } = getPaginationData({
    content: services,
    limit,
    offset,
    route,
  });

  return (
    <Container className='pt-20'>
      <Gallery>
        {data.map((service) => (
          <Box key={service._id}>
            <ServiceCard {...service} />
          </Box>
        ))}
      </Gallery>

      {services.length > 6 && (
        <Box className='mt-5'>
          <Pagination {...rest} />
        </Box>
      )}
    </Container>
  );
};
