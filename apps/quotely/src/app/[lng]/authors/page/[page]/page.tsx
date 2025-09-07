import {
  generateMetadata,
  generateStaticParams,
  getAuthorsPGContent,
} from '@repo/content/quotely/authors/page';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { AuthorList } from '@/features/quotes/components/author-list';

const Page = async ({ params }: PageProps<'/[lng]/authors/page/[page]'>) => {
  const content = await getAuthorsPGContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10'>
      <Header blockquote summary={content.summary} title={content.title} />
      <AuthorList authors={content.authors} lng={content.lng} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { Page as default, generateMetadata, generateStaticParams };
