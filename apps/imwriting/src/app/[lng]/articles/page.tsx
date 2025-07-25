import {
  generateMetadata,
  getArticlesContent,
} from '@repo/content/imwriting/articles';
import { allArticles } from '@repo/content/imwriting/utils';
import type { LocalesParams } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { ArticlesList } from '@/features/articles/components/article-list';

export { generateMetadata };

type ArticlesProps = SearchParamsProps & LocalesParams;

const ArticlesPage = async ({ searchParams, params }: ArticlesProps) => {
  const { lng } = await params;
  const search = await searchParams;
  const content = await getArticlesContent(lng);

  return (
    <Container>
      <Header summary={content.summary} title={content.title} />
      <ArticlesList {...search} articles={allArticles[lng]} />
    </Container>
  );
};

export default ArticlesPage;
