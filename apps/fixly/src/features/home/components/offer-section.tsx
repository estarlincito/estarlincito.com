import type { Locale } from '@repo/content/utils/locales';
import { getRandomItems } from '@repo/lib/randomItems';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { Container } from '@repo/ui/layouts/container';
import { Gallery } from '@repo/ui/layouts/gallery';
import { Section } from '@repo/ui/layouts/section';

import { ServiceCard } from '@/features/services/components/service-card';
import { allServices } from '@/lib/service';

interface TopProps {
  title: string;
  lng: Locale;
  summary: string;
}

export const OfferSection = ({ title, lng, summary }: TopProps) => {
  const randomItems = getRandomItems(allServices[lng], 2);

  return (
    <Section>
      <Heading as='h3' className='text-center'>
        {title}
      </Heading>

      <Gallery size='5'>
        {randomItems.map((item) => (
          <ServiceCard
            {...{ ...item, price: item.price * 0.9 }}
            key={item._id}
          />
        ))}
      </Gallery>
      <Container size='3'>
        <Summary blockquote className='ml-5 mb-5' content={summary} />
      </Container>
    </Section>
  );
};
