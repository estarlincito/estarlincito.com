import {
  generateMetadata,
  generateStaticParams,
  getArticlesCatPageContent,
} from '@repo/content/imwriting/articles/cat/page';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { ArticlesList } from '@/features/articles/components/article-list';

const Page = async ({
  params,
}: PageProps<'/[lng]/articles/[slug]/page/[page]'>) => {
  const content = await getArticlesCatPageContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10 justify-center'>
      <Header
        active={content.active}
        className='px-5'
        links={content.links}
        summary={content.summary}
        title={content.title}
      />

      <ArticlesList articles={content.articles} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { Page as default, generateMetadata, generateStaticParams };
