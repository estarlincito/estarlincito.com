import type { HomeContent } from '@repo/content/fixly/home';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import {
  Topic as UITopic,
  TopicContent,
  TopicItem,
} from '@repo/ui/components/topic';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

export const TopicSection = ({
  title,
  topics,
}: HomeContent['sections']['topic']) => (
  <Container asChild size='3'>
    <Section>
      <Heading as='h3' className='text-center' content={title} />

      <UITopic>
        <TopicContent>
          {topics.map(({ route, label }) => (
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
