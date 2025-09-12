import type { ArticleContent } from '@repo/content/imwriting/articles/article';
import { allArticles } from '@repo/content/imwriting/utils';
import type { Locale } from '@repo/content/shared/locales';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';

import { ArticlesList } from '@/features/articles/components/article-list';

interface InterestingProps
  extends Pick<ArticleContent, 'interesting' | 'route' | 'label'> {
  pathname: string;
  lng: Locale;
}

export const ArticleInteresting = ({
  lng,
  pathname,
  interesting,
  route,
  label,
}: InterestingProps) => {
  const articles = allArticles[lng]
    .filter(({ urls }) => urls.article !== pathname)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <Flex className='gap-5 mt-8 w-full flex-col'>
      <Heading className='text-center'>{interesting}</Heading>
      <ArticlesList articles={articles} />
      <Link className='text-accent-foreground mt-5' route={route}>
        {label}
      </Link>
    </Flex>
  );
};
