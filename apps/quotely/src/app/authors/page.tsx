import { quotely } from '@repo/constants';
import { Container, Header, SearchParamsProps } from '@repo/ui';

import AuthorList from '@/components/authors/list';
import { getAuthors } from '@/lib/quotes';

export const { metadata } = quotely.quotes;

const AuthorsPage = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  const authorsData = await getAuthors(searchParamsData);

  return (
    <Container size='4'>
      <Header
        title={quotely.authors.title}
        summary={quotely.authors.description}
        slug={[{ route: quotely.authors.path, title: quotely.authors.title }]}
      />
      <AuthorList authorsData={authorsData} {...searchParamsData} />
    </Container>
  );
};

export default AuthorsPage;
