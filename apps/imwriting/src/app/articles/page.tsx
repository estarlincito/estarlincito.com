import { imwriting } from '@repo/constants';
import { Header, type SearchParamsProps, Wrapper } from '@repo/ui';
import { allArticles } from 'contentlayer/generated';

import ArticlesList from '@/components/articles/list';

const { articles } = imwriting;

export const { metadata } = articles;

const Page = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;

  return (
    <Wrapper>
      <Header summary={articles.description} title={articles.title} />
      <ArticlesList
        {...params}
        articles={allArticles}
        count={allArticles.length}
        route='articles'
      />
    </Wrapper>
  );
};

export default Page;
