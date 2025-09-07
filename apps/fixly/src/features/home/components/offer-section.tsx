import type { HomeContent } from '@repo/content/fixly/home';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { Container } from '@repo/ui/layouts/container';
import { Gallery } from '@repo/ui/layouts/gallery';
import { Section } from '@repo/ui/layouts/section';

import { ServiceCard } from '@/features/services/components/service-card';

export const OfferSection = ({
  title,
  services,
  summary,
  cta,
}: HomeContent['sections']['offer']) => (
  <Section>
    <Heading as='h3' className='text-center'>
      {title}
    </Heading>

    <Gallery size='5'>
      {services.map((service) => (
        <ServiceCard
          {...{ ...service, cta, price: service.price * 0.9 }}
          key={service._id}
        />
      ))}
    </Gallery>
    <Container size='3'>
      <Summary blockquote className='ml-5 mb-5' content={summary} />
    </Container>
  </Section>
);
