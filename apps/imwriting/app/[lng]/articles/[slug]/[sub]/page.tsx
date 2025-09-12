import {
  generateMetadata,
  generateStaticParams,
  getArticlesSubContent,
} from '@repo/content/imwriting/articles/sub';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { ArticlesList } from '@/features/articles/components/article-list';

const SubPage = async ({
  params,
}: PageProps<'/[lng]/articles/[slug]/[sub]'>) => {
  const content = await getArticlesSubContent(params);
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

export { SubPage as default, generateMetadata, generateStaticParams };
