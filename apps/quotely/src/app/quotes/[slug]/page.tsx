import { GenerateMetadata, toSlug } from '@estarlincito/utils';
import { quotely } from '@repo/constants';
import { getPathname } from '@repo/lib';
import {
  Badge,
  DataList,
  Header,
  Link,
  type Links,
  SubTitle,
  Wrapper,
} from '@repo/ui';
import { headers } from 'next/headers';

import { findQuote } from '@/lib/quotes';
import type { ParamsProps } from '@/types/params';
const { locale, siteName, url } = quotely;

export const generateMetadata = async ({ params }: ParamsProps) => {
  const { slug } = await params;
  const quoteData = await findQuote(encodeURIComponent(slug));

  const metadata = GenerateMetadata.website({
    description: quoteData.quote,
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale,
    siteName,
    title: `Quote #${quoteData.id}`,
    url: `${url}/quote/${toSlug(`${quoteData.id}`)},`,
  });

  return metadata;
};

const QuotePage = async ({ params }: ParamsProps) => {
  const { slug } = await params;

  const {
    id,
    quote,
    sourceName,
    sourceType,
    reference,
    sourceUrl,
    tags,
    ...dataQuote
  } = await findQuote(slug);

  const pathname = await getPathname(headers);

  const links: Links = [
    {
      href: quotely.quotes.path,
      title: quotely.quotes.title,
    },
    {
      href: `${url}/quotes/${toSlug(`${id}`)}`,
      title: `Quote #${id}`,
    },
  ];

  return (
    <Wrapper maxWidth='800px'>
      <Header
        blockquote
        highContrast
        separator
        links={links}
        pathname={pathname}
        summary={quote}
        title={`Quote #${id}`}
      />

      <DataList.Root orientation={{ initial: 'vertical', sm: 'horizontal' }}>
        <SubTitle content='Details' />
        <DataList.Item>
          <DataList.Label minWidth='88px'>Authors:</DataList.Label>
          <DataList.Value>
            {dataQuote.authors.map((author) => (
              <Link href={`/authors/${author.slug}`} key={author.id}>
                {author.name}
              </Link>
            ))}
          </DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label minWidth='88px'>Source Name:</DataList.Label>
          <DataList.Value>{sourceName.name}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label minWidth='88px'>Source Type:</DataList.Label>
          <DataList.Value>{sourceType.name}</DataList.Value>
        </DataList.Item>

        <DataList.Item>
          <DataList.Label minWidth='88px'>Reference:</DataList.Label>
          <DataList.Value>{reference}</DataList.Value>
        </DataList.Item>

        {sourceUrl !== '#' && (
          <DataList.Item>
            <DataList.Label minWidth='88px'>Source URl:</DataList.Label>
            <DataList.Value>{sourceUrl}</DataList.Value>
          </DataList.Item>
        )}

        <DataList.Item>
          <DataList.Label minWidth='88px'>Tags:</DataList.Label>
          <DataList.Value>
            {tags.map((tag) => (
              <Link href={`/tags/${tag.name}`} key={tag.id}>
                <Badge color='gray'>{tag.name}</Badge>
              </Link>
            ))}
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Wrapper>
  );
};

export default QuotePage;
