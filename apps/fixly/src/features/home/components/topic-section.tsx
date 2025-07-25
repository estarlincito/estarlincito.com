import type { Locale } from '@repo/content/utils/locales';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import {
  Topic as UITopic,
  TopicContent,
  TopicItem,
} from '@repo/ui/components/topic';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

import { toTopics } from '@/lib/topic';

interface TopicProps {
  title: string;
  lng: Locale;
}

export const TopicSection = ({ title, lng }: TopicProps) => (
  <Container asChild size='3'>
    <Section>
      <Heading as='h3' className='text-center' content={title} />

      <UITopic>
        <TopicContent>
          {toTopics(lng).map(({ route, label }) => (
            <TopicItem key={label}>
              <Link route={route} variant='default'>
                {label}
              </Link>
            </TopicItem>
          ))}
        </TopicContent>
      </UITopic>
    </Section>
  </Container>
);
