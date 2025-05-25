import { AuthorList } from '@app/quotely/components/author-list';
import { METADATA, SECTIONS } from '@app/quotely/constants/authors';
import { getAuthors } from '@app/quotely/lib/quotes';
import { GenerateMetadata } from '@estarlincito/utils';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { Section } from '@repo/ui/layouts/section';

export const metadata = GenerateMetadata.website(METADATA);

const AuthorsPage = async ({ searchParams }: SearchParamsProps) => {
  const searchParamsData = await searchParams;
  const { authors } = await getAuthors(searchParamsData);

  return (
    <Container size='2'>
      <Section className='h-full justify-center m-0'>
        <Header {...SECTIONS.HEADER} />
        <AuthorList authors={authors} />
      </Section>
    </Container>
  );
};

export default AuthorsPage;
