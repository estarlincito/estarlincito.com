import { QuoteList } from '@app/quotely/components/quote-list';
import { findAuthor } from '@app/quotely/lib/quotes';
import { locale, siteName, url } from '@app/quotely/settings';
import type { ParamsProps } from '@app/quotely/types/params';
import { GenerateMetadata } from '@estarlincito/utils';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { z } from 'zod';

export const generateMetadata = async ({ params }: ParamsProps) => {
  const { slug } = await params;
  const authorData = await findAuthor(slug);

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

  // const links: LinksType = [
  //   {
  //     label: quotely.authors.title,
  //     route: quotely.authors.path,
  //   },
  //   {
  //     label: authorData.author.name,
  //     route: authorData.author.slug,
  //   },
  // ];

  return (
    <Container>
      <Header summary='' title={authorData.author.name} />
      <QuoteList
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
