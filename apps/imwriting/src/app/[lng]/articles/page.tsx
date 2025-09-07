import {
  generateMetadata,
  getArticlesContent,
} from '@repo/content/imwriting/articles';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { ArticlesList } from '@/features/articles/components/article-list';

const ArticlesPage = async ({ params }: PageProps<'/[lng]'>) => {
  const content = await getArticlesContent(params);

  return (
    <Container className='flex flex-col gap-y-10 justify-center'>
      <Header summary={content.summary} title={content.title} />
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

export { ArticlesPage as default, generateMetadata };
