import { imwriting } from '@repo/constants';
import { Badge, Heading, Link, Section } from '@repo/ui';
import { allArticles } from 'contentlayer/generated';

const Topics = () => {
  const { alllinks } = imwriting.topics(allArticles);

  return (
    <Section p={{ initial: '5', md: '0' }}>
      <Heading align='center' my='2'>
        Topics
      </Heading>

      {alllinks.map(({ route, label, key }) => (
        <Badge color='gray' key={key} mr='1'>
          <Link href={route} underline='none'>
            {label}
          </Link>
        </Badge>
      ))}
    </Section>
  );
};

export default Topics;
