import { Flex, Heading } from '@radix-ui/themes';
import { allArticles } from 'contentlayer/generated';
import React from 'react';

import ArticlesList from '../../list';

interface Props {
  pathname: string;
}

const Interesting = ({ pathname }: Props) => {
  const Interesting = allArticles
    .filter(({ meta }) => meta.pathnames.article !== pathname)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  return (
    <Flex direction='column' width='100%' gap='5'>
      <Heading align='center'>Interesting Articles</Heading>
      <ArticlesList articles={Interesting} count={2} route='/' />
    </Flex>
  );
};

export default Interesting;
