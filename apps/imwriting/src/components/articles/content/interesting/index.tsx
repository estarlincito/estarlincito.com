import { num } from '@estarlincito/utils';
import { Flex, Heading } from '@repo/ui';
import { allArticles } from 'contentlayer/generated';

import ArticlesList from '../../list';

interface Props {
  pathname: string;
}

const Interesting = ({ pathname }: Props) => {
  const _allArticles = allArticles
    .filter(({ meta }) => meta.pathnames.article !== pathname)
    .sort(() => Math.random() - num('0.5'))
    .slice(num('0'), num('2'));

  return (
    <Flex direction='column' gap='5' mt='8' width='100%'>
      <Heading align='center'>Interesting Articles</Heading>
      <ArticlesList articles={_allArticles} count={num('2')} route='/' />
    </Flex>
  );
};

export default Interesting;
