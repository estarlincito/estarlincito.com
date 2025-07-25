import { type Articles } from '@repo/content/.mdxlayer/imwriting/generated';
import type { SearchParams } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { ArticlesList } from '@/features/articles/components/article-list';

interface Props extends SearchParams {
  articles: [Articles, ...Articles[]];
}

export const SubCategoryPage = async ({ articles, limit, offset }: Props) => {
  const {
    meta: { subcategory },
    breadcrumb,
    slugs,
  } = articles[0];

  return (
    <Container className='p-0'>
      <Header
        active={subcategory.title}
        className='px-5'
        links={breadcrumb.subcategory}
        summary={subcategory.description}
        title={subcategory.title}
      />

      <ArticlesList
        articles={articles}
        limit={limit}
        offset={offset}
        route={slugs.subcategory}
      />
    </Container>
  );
};
