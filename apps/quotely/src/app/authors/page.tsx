import { quotely } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Header, type Links, type SearchParamsProps, Wrapper } from '@repo/ui';
import { headers } from 'next/headers';

import AuthorList from '@/components/authors/list';
import { getAuthors } from '@/lib/quotes';

export const { metadata } = quotely.quotes;

const AuthorsPage = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  const authorsData = await getAuthors(searchParamsData);
  const pathname = await getPathname(headers);
  const links: Links = [
    { href: quotely.authors.path, title: quotely.authors.title },
  ];

  return (
    <Wrapper>
      <Header
        links={links}
        pathname={pathname}
        summary={quotely.authors.description}
        title={quotely.authors.title}
      />
      <AuthorList authorsData={authorsData} {...searchParamsData} />
    </Wrapper>
  );
};

export default AuthorsPage;
