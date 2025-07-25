import type { HomeContent } from '@repo/content/imwriting/home';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Topic, TopicContent, TopicItem } from '@repo/ui/components/topic';
import { Section } from '@repo/ui/layouts/section';

export const HomeTopics = ({
  items,
  title,
}: HomeContent['sections']['topics']) => (
  <Section>
    <Heading as='h3' className='my-2 text-center'>
      {title}
    </Heading>
    <Topic>
      <TopicContent>
        {items.map(({ route, label }) => (
          <TopicItem key={label}>
            <Link route={route} variant='default'>
              {label}
            </Link>
          </TopicItem>
        ))}
      </TopicContent>
    </Topic>
  </Section>
);
