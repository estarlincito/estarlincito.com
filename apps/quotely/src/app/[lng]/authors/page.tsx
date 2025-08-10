import {
  generateMetadata,
  getAuthorsContent,
} from '@repo/content/quotely/authors';
import { getAuthors } from '@repo/content/quotely/lib/quotes';
import type { LocalesParams } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { Section } from '@repo/ui/layouts/section';

import { AuthorList } from '@/features/quotes/components/author-list';

export { generateMetadata };
const AuthorsPage = async ({
  searchParams,
  params,
}: SearchParamsProps & LocalesParams) => {
  const { lng } = await params;
  const searchParamsData = await searchParams;
  const { authors } = await getAuthors(searchParamsData);
  const content = await getAuthorsContent(lng);

  return (
    <Container size='2'>
      <Section className='h-full justify-center m-0'>
        <Header summary={content.summary} title={content.title} />
        <AuthorList authors={authors} lng={lng} />
      </Section>
    </Container>
  );
};

export default AuthorsPage;
