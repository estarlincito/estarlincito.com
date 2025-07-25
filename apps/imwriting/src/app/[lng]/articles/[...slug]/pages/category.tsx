import { type Articles } from '@repo/content/.mdxlayer/imwriting/generated';
import type { SearchParams } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { ArticlesList } from '@/features/articles/components/article-list';

interface CategoryProps extends SearchParams {
  articles: [Articles, ...Articles[]];
}

export const CategoryPage = async ({
  articles,
  limit,
  offset,
}: CategoryProps) => {
  const {
    slugs,
    breadcrumb,
    meta: {
      category: { title, description },
    },
  } = articles[0];

  return (
    <Container className='p-0'>
      <Header
        active={title}
        className='px-5'
        links={breadcrumb.category}
        summary={description}
        title={title}
      />

      <ArticlesList
        items={articles}
        limit={limit}
        offset={offset}
        route={slugs.category}
      />
    </Container>
  );
};
