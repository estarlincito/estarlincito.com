import { GenerateMetadata } from '@estarlincito/utils';
import { quotely } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Header, type Links, type SearchParamsProps, Wrapper } from '@repo/ui';
import { headers } from 'next/headers';

import QuoteList from '@/components/quotes/list';
import { findTag } from '@/lib/quotes';
import type { ParamsProps } from '@/types/params';

export const generateMetadata = async ({ params }: ParamsProps) => {
  const { slug } = await params;
  const tagData = await findTag(slug);

  const { locale, siteName, url } = quotely;

  const metadata = GenerateMetadata.website({
    description: '',
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale,
    siteName,
    title: tagData.tag.name,
    url: `${url}/${tagData.tag.name}`,
  });

  return metadata;
};

const TagPage = async ({
  params,
  searchParams,
}: ParamsProps & SearchParamsProps) => {
  const { slug } = await params;
  const searchParamsData = await searchParams;
  const tagData = await findTag(slug);
  const href = tagData.tag.name;
  const pathname = await getPathname(headers);
  const links: Links = [
    {
      href: quotely.tags.path,
      title: quotely.tags.title,
    },
    {
      href,
      title: tagData.tag.name,
    },
  ];

  return (
    <Wrapper>
      <Header
        links={links}
        pathname={pathname}
        summary=''
        title={tagData.tag.name}
      />
      <QuoteList
        route={href}
        {...searchParamsData}
        quotesData={{ count: tagData.count, quotes: tagData.tag.quotes }}
      />
    </Wrapper>
  );
};

export default TagPage;
