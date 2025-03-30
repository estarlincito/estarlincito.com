import { imwriting } from '@repo/constants';
import { SearchParamsProps } from '@repo/ui';
import { allArticles } from 'contentlayer/generated';
import React from 'react';

import ArticlesList from '@/components/articles/list';
import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
const { articles } = imwriting;

export const { metadata } = articles;

const Page = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  return (
    <Container size='4'>
      <Header title={articles.title} description={articles.description} m='5' />
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
