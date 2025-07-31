import { allArticles, findArticles } from '@repo/content/imwriting/utils';
import type { Locale } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import CatchAll from '@repo/ui/pages/catch-all';

import { ArticlePage } from './pages/article';
import { CategoryPage } from './pages/category';

interface Props extends SearchParamsProps {
  params: Promise<{ lng: Locale; slug: string }>;
  searchParams: SearchParamsProps['searchParams'];
}

export const generateStaticParams = () => {
  const seen = new Set<string>();

  for (const { slugs } of allArticles.en) {
    seen.add(slugs.article);
    seen.add(slugs.category);
  }

  return Array.from(seen).map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug, lng } = await params;
  const articlesData = findArticles(slug, lng);

  if (!articlesData) return {};

  const { articles, type } = articlesData;

  if (type === 'article') return articles[0].meta.article;
  if (type === 'category') return articles[0].meta.category;
  return {};
};

const Page = async ({ params, searchParams }: Props) => {
  const { lng, slug } = await params;
  const searchParamsData = await searchParams;
  const articlesData = findArticles(slug, lng);

  if (!articlesData) return CatchAll;
  const { articles, type } = articlesData;

  return (
    <>
      {type === 'article' && <ArticlePage {...articles[0]} />}
      {type === 'category' && (
        <CategoryPage articles={articles} {...searchParamsData} />
      )}
    </>
  );
};

export default Page;
