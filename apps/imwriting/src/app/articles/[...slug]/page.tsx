import { Container, type SearchParamsProps } from '@repo/ui';
import { notFound } from 'next/navigation';
import React from 'react';

import ArticleContent from '@/components/articles/content';
import getArticles from '@/lib/articles';
import { Params } from '@/types/params';

import Category from './pages/category';
import SubCategory from './pages/subcategory';

interface Props extends SearchParamsProps {
  params: Promise<Params>;
}

export const generateMetadata = async (props: Props) => {
  const { params } = props;
  const { slug } = await params;
  const articlesData = getArticles(slug);

  if (!articlesData) notFound();

  const { articles, type } = articlesData;

  if (type === 'article') return articles[0].meta.article;
  if (type === 'category') return articles[0].meta.category;
  if (type === 'subCategory') return articles[0].meta.subcategory;
  return {};
};

const Page = async (props: Props) => {
  const { params, searchParams } = props;
  const _searchParams = await searchParams;
  const { slug } = await params;
  if (slug.length >= 3) notFound();

  const articlesData = getArticles(slug);
  if (!articlesData) notFound();
  const { articles, type } = articlesData;

  return (
    <Container size={type === 'article' ? '3' : '4'}>
      {type === 'article' && <ArticleContent {...articles[0]} />}
      {type === 'category' && (
        <Category articles={articles} {..._searchParams} />
      )}
      {type === 'subCategory' && (
        <SubCategory articles={articles} {..._searchParams} />
      )}
    </Container>
  );
};

export default Page;
