import { quotely } from '@repo/constants';
import { Container, Header, type SearchParamsProps } from '@repo/ui';

import AuthorList from '@/components/authors/list';
import ClientBreadcrumb from '@/components/breadcrumb';
import { getAuthors } from '@/lib/quotes';

export const { metadata } = quotely.quotes;

const AuthorsPage = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  const authorsData = await getAuthors(searchParamsData);

  return (
    <Container size='4'>
      <ClientBreadcrumb
        slug={[{ route: quotely.authors.path, title: quotely.authors.title }]}
      />
      <Header
        title={quotely.authors.title}
        summary={quotely.authors.description}
      />
      <AuthorList authorsData={authorsData} {...searchParamsData} />
    </Container>
  );
};

export default AuthorsPage;
