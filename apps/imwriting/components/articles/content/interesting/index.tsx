import { ArticlesList } from '@app/imwriting/components/articles/list';
import { Heading } from '@repo/ui/components/heading';
import { Flex } from '@repo/ui/layouts/flex';
import { allArticles } from 'contentlayer/generated';

interface Props {
  pathname: string;
}

export const Interesting = ({ pathname }: Props) => {
  const _allArticles = allArticles
    .filter(({ meta }) => meta.pathnames.article !== pathname)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <Flex className='gap-5 mt-8 w-full flex-col'>
      <Heading className='text-center'>Interesting Articles</Heading>
      <ArticlesList articles={_allArticles} count={2} route='/' />
    </Flex>
  );
};
