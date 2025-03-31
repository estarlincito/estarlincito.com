import { imwriting } from '@repo/constants';
import { Container, Header, type SearchParamsProps } from '@repo/ui';
import { allArticles } from 'contentlayer/generated';
import React from 'react';

import ArticlesList from '@/components/articles/list';

const { articles } = imwriting;

export const { metadata } = articles;

const Page = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  return (
    <Container size='4'>
      <Header title={articles.title} summary={articles.description} />
      <ArticlesList
        {...params}
        route='articles'
        articles={allArticles}
        count={allArticles.length}
      />
    </Container>
  );
};

export default Page;
