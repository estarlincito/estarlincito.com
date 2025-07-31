import { type Articles } from '@repo/content/.mdxlayer/imwriting/generated';
import { loadTranslations } from '@repo/content/imwriting/locales';
import type { Locale } from '@repo/content/utils/locales';
import type { SearchParams } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { ArticlesList } from '@/features/articles/components/article-list';

interface CategoryProps extends SearchParams {
  articles: [Articles, ...Articles[]];
}

export const CategoryPage = async ({
  articles,
  limit,
  offset,
}: CategoryProps) => {
  const {
    lang,
    urls,
    meta: {
      category: { title, description },
    },
  } = articles[0];

  const { labels } = await loadTranslations(lang as Locale);

  return (
    <Container className='p-0'>
      <Header
        active={title}
        className='px-5'
        links={[{ label: labels.nav.articles, route: urls.articles }]}
        summary={description}
        title={title}
      />

      <ArticlesList
        items={articles}
        limit={limit}
        offset={offset}
        route={urls.category}
      />
    </Container>
  );
};
