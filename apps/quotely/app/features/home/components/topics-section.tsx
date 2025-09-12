import type { HomeContent } from '@repo/content/quotely/home';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Summary } from '@repo/ui/components/summary';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

import { TopicList } from '@/features/quotes/components/topic-list';

export const TopicsSection = async ({
  title,
  topics,
  summary,
  ...cta
}: HomeContent['sections']['topics']) => (
  <Container size='3'>
    <Section>
      <Heading as='h2' className='text-center' content={title} />
      <Summary className='text-center text-muted-foreground'>{summary}</Summary>

      {topics && <TopicList lng='en' topics={topics} />}
      <Link className='self-center' {...cta} />
    </Section>
  </Container>
);
