import { sortByDate } from '@estarlincito/utils';
import { Flex, Heading, Link, Section } from '@radix-ui/themes';
import { allArticles } from 'contentlayer/generated';
import React from 'react';

import ArticlesList from '@/components/articles/list';

const Latest = () => {
  const lastThree = sortByDate(allArticles, 'publishedTime').slice(0, 3);
  return (
    <Section>
      <Heading size='6' my='5' align={{ initial: 'center', md: 'left' }}>
        Latest Articles
      </Heading>
      <ArticlesList route='/' articles={lastThree} count={3} />
      <Flex justify={{ initial: 'center', md: 'start' }}>
        <Link href='/articles'>Check more articles</Link>
      </Flex>
    </Section>
  );
};

export default Latest;
