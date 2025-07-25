import type { HomeContent } from '@repo/content/quotely/home';
import { getRandomQuote } from '@repo/content/quotely/lib/quotes';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

import { QuoteCard } from '@/features/quotes/components/quote-card';

export const DaySection = async ({
  cta,
  title,
}: HomeContent['sections']['day']) => {
  const quoteData = await getRandomQuote();

  return (
    <Container asChild size='1'>
      <Section>
        <Heading className='text-center' content={title} />
        <QuoteCard {...quoteData} />
        <Link className='self-center' {...cta} />
      </Section>
    </Container>
  );
};
