import { SearchParams } from '@repo/ui';
import { type Articles } from 'contentlayer/generated';
import React from 'react';

import ArticlesList from '@/components/articles/list';
import Header from '@/components/layout/header';

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
      <Header
        slug={[{ route: pathnames.category, title }]}
        title={title}
        description={description}
        m='5'
      />
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
