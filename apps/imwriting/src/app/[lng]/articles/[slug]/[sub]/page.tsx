import { loadTranslations } from '@repo/content/imwriting/locales';
import { allArticles, findSubArticles } from '@repo/content/imwriting/utils';
import type { Locale } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { ArticlesList } from '@/features/articles/components/article-list';

interface Props extends SearchParamsProps {
  params: Promise<{ lng: Locale; sub: string; slug: string }>;
  searchParams: SearchParamsProps['searchParams'];
}

export const generateStaticParams = () => {
  const seen = new Map<string, string>();

  for (const { slugs } of allArticles.en) {
    seen.set(slugs.subcategory, slugs.category);
  }

  return Array.from(seen, ([sub, slug]) => ({ slug, sub }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { sub, lng, slug } = await params;
  const articles = findSubArticles({ lng, slug, sub });
  if (!articles) return {};

  return articles[0].meta.category;
};

const SubPage = async ({ params, searchParams }: Props) => {
  const { lng, sub, slug } = await params;
  const searchParamsData = await searchParams;
  const { labels } = await loadTranslations(lng);
  const articles = findSubArticles({ lng, slug, sub });
  if (!articles) return CatchAll;
  const { meta, subcategory, category, urls } = articles[0];

  return (
    <Container className='p-0'>
      <Header
        active={subcategory}
        className='px-5'
        links={[
          { label: labels.nav.articles, route: urls.articles },
          { label: category, route: urls.category },
        ]}
        summary={meta.subcategory.description}
        title={subcategory}
      />

      <ArticlesList
        items={articles}
        {...searchParamsData}
        route={urls.subcategory}
      />
    </Container>
  );
};

export default SubPage;
