import { findArticles } from '@repo/content/imwriting/utils';
import type { Locale } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import CatchAll from '@repo/ui/pages/catch-all';

import type { Params } from '@/types/params';

import { ArticlePage } from './pages/article';
import { CategoryPage } from './pages/category';
import { SubCategoryPage } from './pages/subcategory';

interface Props extends SearchParamsProps {
  params: Promise<Params & { lng: Locale }>;
}

export const generateMetadata = async ({ params }: Props) => {
  const { slug, lng } = await params;
  const articlesData = findArticles(slug, lng);

  if (!articlesData) return {};

  const { articles, type } = articlesData;

  if (type === 'article') return articles[0].meta.article;
  if (type === 'category') return articles[0].meta.category;
  if (type === 'subCategory') return articles[0].meta.subcategory;
  return {};
};

const Page = async ({ params, searchParams }: Props) => {
  const { lng, slug } = await params;
  const searchParamsData = await searchParams;

  if (slug.length >= 3) return CatchAll;

  const articlesData = findArticles(slug, lng);
  if (!articlesData) return CatchAll;
  const { articles, type } = articlesData;

  return (
    <>
      {type === 'article' && <ArticlePage {...articles[0]} />}
      {type === 'category' && (
        <CategoryPage articles={articles} {...searchParamsData} />
      )}
      {type === 'subCategory' && (
        <SubCategoryPage articles={articles} {...searchParamsData} />
      )}
    </>
  );
};

export default Page;
