import type { HomeContent } from '@repo/content/quotely/home';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Summary } from '@repo/ui/components/summary';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

import { AuthorList } from '@/features/quotes/components/author-list';

export const AuthorsSection = async ({
  title,
  authors,
  summary,
  ...cta
}: HomeContent['sections']['authors']) => (
  <Container asChild size='3'>
    <Section>
      <Heading as='h2' className='text-center' content={title} />
      <Summary className='text-center text-muted-foreground'>{summary}</Summary>

      {authors && <AuthorList authors={authors.slice(0, 2)} lng='en' />}
      <Link className='self-center' {...cta} />
    </Section>
  </Container>
);
