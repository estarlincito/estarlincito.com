import { num, sortByDate } from '@estarlincito/utils';
import { Flex, Heading, Link, Section } from '@repo/ui';
import { allArticles } from 'contentlayer/generated';

import ArticlesList from '@/components/articles/list';

const Latest = () => {
  const lastThree = sortByDate(allArticles, 'publishedTime').slice(
    num('0'),
    num('3'),
  );

  return (
    <Section>
      <Heading align={{ initial: 'center', md: 'left' }} my='5' size='6'>
        Latest Articles
      </Heading>
      <ArticlesList articles={lastThree} count={num('3')} route='/' />
      <Flex justify={{ initial: 'center', md: 'start' }}>
        <Link href='/articles'>Check more articles</Link>
      </Flex>
    </Section>
  );
};

export default Latest;
