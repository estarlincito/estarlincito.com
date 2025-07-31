import type { ArticleContent } from '@repo/content/imwriting/article';
import { allArticles } from '@repo/content/imwriting/utils';
import type { Locale } from '@repo/content/utils/locales';
import { Heading } from '@repo/ui/components/heading';
import { Flex } from '@repo/ui/layouts/flex';

import { ArticlesList } from '@/features/articles/components/article-list';

interface InterestingProps
  extends Omit<ArticleContent['interesting'], 'interesting'> {
  pathname: string;
  lng: Locale;
}

export const ArticleInteresting = ({
  lng,
  pathname,
  title,
}: InterestingProps) => {
  const items = allArticles[lng]
    .filter(({ urls }) => urls.article !== pathname)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <Flex className='gap-5 mt-8 w-full flex-col'>
      <Heading className='text-center'>{title}</Heading>
      <ArticlesList items={items} route='/' />
    </Flex>
  );
};
