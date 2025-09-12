import {
  generateMetadata,
  getAuthorsContent,
} from '@repo/content/quotely/authors';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { AuthorList } from '@/features/quotes/components/author-list';

const AuthorsPage = async ({ params }: PageProps<'/[lng]/authors'>) => {
  const content = await getAuthorsContent(params);

  return (
    <Container className='flex flex-col gap-y-10'>
      <Header blockquote summary={content.summary} title={content.title} />
      <AuthorList authors={content.authors} lng={content.lng} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        route={content.route}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { AuthorsPage as default, generateMetadata };
