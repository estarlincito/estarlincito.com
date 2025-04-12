import { num } from '@estarlincito/utils';
import { type SearchParamsProps, Wrapper } from '@repo/ui';
import { notFound } from 'next/navigation';

import ArticleContent from '@/components/articles/content';
import getArticles from '@/lib/articles';
import type { Params } from '@/types/params';

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

  if (type === 'article') return articles[num('0')].meta.article;
  if (type === 'category') return articles[num('0')].meta.category;
  if (type === 'subCategory') return articles[num('0')].meta.subcategory;
  return {};
};

const Page = async (props: Props) => {
  const { params, searchParams } = props;
  const _searchParams = await searchParams;
  const { slug } = await params;
  if (slug.length >= num('3')) notFound();

  const articlesData = getArticles(slug);
  if (!articlesData) notFound();
  const { articles, type } = articlesData;

  return (
    <Wrapper
      p={type === 'article' ? '5' : { initial: '5', md: '0' }}
      size={type === 'article' ? '3' : '4'}
    >
      {type === 'article' && <ArticleContent {...articles[num('0')]} />}
      {type === 'category' && (
        <Category articles={articles} {..._searchParams} />
      )}
      {type === 'subCategory' && (
        <SubCategory articles={articles} {..._searchParams} />
      )}
    </Wrapper>
  );
};

export default Page;
