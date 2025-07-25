import { GenerateMetadata } from '@estarlincito/utils';
import { findAuthor } from '@repo/content/quotely/lib/quotes';
import { host, siteName } from '@repo/content/quotely/settings';
import type { LocalesParams } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { z } from 'zod/v4';

import { QuoteList } from '@/features/quotes/components/quote-list';
import type { ParamsProps } from '@/types/params';
export const generateMetadata = async ({
  params,
}: ParamsProps & LocalesParams) => {
  const { slug, lng } = await params;
  const authorData = await findAuthor(slug);

  const metadata = GenerateMetadata.website({
    description: z.string().parse(authorData.author.bio ?? ''),
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale: lng,
    siteName,
    title: authorData.author.name,
    url: `${host}/${lng}/${authorData.author.slug}`,
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
    <Container>
      <Header summary='' title={authorData.author.name} />
      <QuoteList
        route={authorData.author.slug}
        {...searchParamsData}
        items={{
          count: authorData.count,
          quotes: authorData.author.quotes,
        }}
      />
    </Container>
  );
};

export default AuthorPage;
