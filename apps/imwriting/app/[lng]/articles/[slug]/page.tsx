import {
  articleMetadata,
  generateStaticParams,
} from '@repo/content/imwriting/articles/article';
import { categoryMetadata } from '@repo/content/imwriting/articles/cat';
import {
  checkArticle,
  findArticle,
} from '@repo/content/imwriting/utils/articles';
import CatchAll from '@repo/ui/pages/catch-all';
import { pickLng } from '@repo/utils/lng';

import { ArticlePage } from './pages/article';
import { CategoryPage } from './pages/category';

const generateMetadata = async ({
  params,
}: PageProps<'/[lng]/articles/[slug]'>) => {
  const { slug } = await params;
  const check = checkArticle(slug);
  if (!check) return {};
  if (check === 'category') return categoryMetadata({ params });
  return articleMetadata({ params });
};

const Page = async ({ params }: PageProps<'/[lng]/articles/[slug]'>) => {
  const { slug } = await params;
  const lng = await pickLng(params);
  const check = checkArticle(slug);
  if (!check) return CatchAll({ params });
  if (check === 'category') return CategoryPage({ params });
  const articleData = findArticle(lng, slug);
  if (!articleData) return CatchAll({ params });

  return ArticlePage({ params });
};

export { Page as default, generateMetadata, generateStaticParams };
