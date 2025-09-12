import {
  type ArticlesCatProps,
  getArticlesCatContent,
} from '@repo/content/imwriting/articles/cat';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { ArticlesList } from '@/features/articles/components/article-list';

export const CategoryPage = async ({ params }: ArticlesCatProps) => {
  const content = await getArticlesCatContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10 justify-center'>
      <Header
        active={content.title}
        className='px-5'
        links={content.links}
        summary={content.summary}
        title={content.title}
      />

      <ArticlesList articles={content.articles} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        route={content.route}
        totalPages={content.totalPages}
      />
    </Container>
  );
};
