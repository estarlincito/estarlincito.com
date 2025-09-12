import type { HomeContent } from '@repo/content/quotely/home';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Summary } from '@repo/ui/components/summary';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

import { QuoteList } from '@/features/quotes/components/quote-list';

export const DaySection = async ({
  title,
  summary,
  quotes,
  ...cta
}: HomeContent['sections']['day']) => (
  <Container asChild size='3'>
    <Section>
      <Heading as='h2' className='text-center' content={title} />
      <Summary className='text-center text-muted-foreground'>{summary}</Summary>
      {quotes && <QuoteList quotes={quotes} />}
      <Link className='self-center' {...cta} />
    </Section>
  </Container>
);
