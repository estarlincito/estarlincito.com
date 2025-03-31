import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Header, type SearchParamsProps } from '@repo/ui';
import { z } from 'zod';

import ClientBreadcrumb from '@/components/breadcrumb';
import Quotes from '@/components/quotes/list';
import { findAuthor } from '@/lib/quotes';
import type { ParamsProps } from '@/types/params';

export const generateMetadata = async ({ params }: ParamsProps) => {
  const { slug } = await params;
  const authorData = await findAuthor(slug);

  const { locale, siteName, url } = quotely;

  const metadata = GenerateMetadata.website({
    description: z.string().parse(authorData.author.bio ?? ''),
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale,
    siteName,
    title: authorData.author.name,
    url: `${url}/${authorData.author.slug}`,
  });

  return metadata;
};

const AuthorPage = async ({
  params,
  searchParams,
}: ParamsProps & SearchParamsProps) => {
  const { slug } = await params;
  const searchParamsData = await searchParams;
  const authorData = await findAuthor(slug);

  return (
    <Container size='4'>
      <ClientBreadcrumb
        slug={[
          {
            route: quotely.authors.path,
            title: quotely.authors.title,
          },
          {
            route: authorData.author.slug,
            title: authorData.author.name,
          },
        ]}
      />
      <Header title={authorData.author.name} summary='' />
      <Quotes
        route={authorData.author.slug}
        {...searchParamsData}
        quotesData={{
          count: authorData.count,
          quotes: authorData.author.quotes,
        }}
      />
    </Container>
  );
};

export default AuthorPage;
