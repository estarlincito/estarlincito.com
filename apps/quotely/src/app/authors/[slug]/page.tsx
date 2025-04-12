import { GenerateMetadata } from '@estarlincito/utils';
import { quotely } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Header, type Links, type SearchParamsProps, Wrapper } from '@repo/ui';
import { headers } from 'next/headers';
import { z } from 'zod';

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
  const pathname = await getPathname(headers);
  const links: Links = [
    {
      href: quotely.authors.path,
      title: quotely.authors.title,
    },
    {
      href: authorData.author.slug,
      title: authorData.author.name,
    },
  ];

  return (
    <Wrapper>
      <Header
        links={links}
        pathname={pathname}
        summary=''
        title={authorData.author.name}
      />
      <Quotes
        route={authorData.author.slug}
        {...searchParamsData}
        quotesData={{
          count: authorData.count,
          quotes: authorData.author.quotes,
        }}
      />
    </Wrapper>
  );
};

export default AuthorPage;
