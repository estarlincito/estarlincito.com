import { ArticlesList } from '@app/imwriting/components/articles/list';
import { METADATA, SECTIONS } from '@app/imwriting/constants/articles';
import { GenerateMetadata } from '@estarlincito/utils';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { allArticles } from 'contentlayer/generated';
export const metadata = GenerateMetadata.website(METADATA);

const ArticlesPage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;

  return (
    <Container>
      <Header {...SECTIONS.HEADERS} />
      <ArticlesList
        {...params}
        articles={allArticles}
        count={allArticles.length}
        route='articles'
      />
    </Container>
  );
};

export default ArticlesPage;
