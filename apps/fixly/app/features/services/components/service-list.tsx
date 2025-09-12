import type { Services } from '@repo/content/.mdxlayer/fixly/generated';
import type { ServicesContent } from '@repo/content/fixly/services';
import { Box } from '@repo/ui/components/box';
import { Gallery } from '@repo/ui/layouts/gallery';

import { ServiceCard } from './service-card';

interface ServiceListProps {
  services: Services[];
  cta: ServicesContent['cta'];
}

export const ServiceList = ({ services, cta }: ServiceListProps) => (
  <Gallery>
    {services.map((service) => (
      <Box key={service._id}>
        <ServiceCard {...{ ...service, cta }} />
      </Box>
    ))}
  </Gallery>
);
