import { Header, type SearchParams } from '@repo/ui';
import { type Articles } from 'contentlayer/generated';
import React from 'react';

import ArticlesList from '@/components/articles/list';
import ClientBreadcrumb from '@/components/breadcrumb';

interface Props extends SearchParams {
  articles: [Articles, ...Articles[]];
}

const Category = async ({ articles, limit, offset }: Props) => {
  const {
    meta: {
      category: { title, description },
      pathnames,
    },
  } = articles[0];

  return (
    <>
      <ClientBreadcrumb slug={[{ route: pathnames.category, title }]} />
      <Header title={title} summary={description} />
      <ArticlesList
        count={articles.length}
        articles={articles}
        route={articles[0].meta.pathnames.category}
        limit={limit}
        offset={offset}
      />
    </>
  );
};

export default Category;
