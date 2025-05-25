import { getTopics } from '@app/imwriting/lib/topics';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Topic, TopicContent, TopicItem } from '@repo/ui/components/topic';
import { Section } from '@repo/ui/layouts/section';
import { allArticles } from 'contentlayer/generated';

export const Topics = () => {
  const { alllinks } = getTopics(allArticles);

  return (
    <Section>
      <Heading as='h3' className='my-2 text-center'>
        Topics
      </Heading>
      <Topic>
        <TopicContent>
          {alllinks.map(({ route, label, key }) => (
            <TopicItem key={key}>
              <Link route={route} variant='default'>
                {label}
              </Link>
            </TopicItem>
          ))}
        </TopicContent>
      </Topic>
    </Section>
  );
};
