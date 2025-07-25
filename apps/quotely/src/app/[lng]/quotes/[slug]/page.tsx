import { GenerateMetadata, toSlug } from '@estarlincito/utils';
import { findQuote } from '@repo/content/quotely/lib/quotes';
import { host, siteName } from '@repo/content/quotely/settings';
import type { LocalesParams } from '@repo/content/utils/locales';
// import { DataList } from '@repo/ui';
import { Flex } from '@repo/ui/layouts/flex';
import { Header } from '@repo/ui/layouts/header';

import type { ParamsProps } from '@/types/params';

export const generateMetadata = async ({
  params,
}: ParamsProps & LocalesParams) => {
  const { slug, lng } = await params;
  const quoteData = await findQuote(encodeURIComponent(slug));

  const metadata = GenerateMetadata.website({
    description: quoteData.quote,
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale: lng,
    siteName,
    title: `Quote #${quoteData.id}`,
    url: `${host}/${lng}/quote/${toSlug(`${quoteData.id}`)},`,
  });

  return metadata;
};

const QuotePage = async ({ params }: ParamsProps) => {
  const { slug } = await params;

  const {
    id,
    quote,
    // sourceName,
    // sourceType,
    // reference,
    // sourceUrl,
    // tags,
    // ...dataQuote
  } = await findQuote(slug);

  return (
    <Flex className='max-w-[800px]'>
      <Header summary={quote} title={`Quote #${id}`} />

      {/* <DataList.Root orientation={{ initial: 'vertical', sm: 'horizontal' }}>
        <Heading as='h3' content='Details' />
        <DataList.Item>
          <DataList.Label minWidth='88px'>Authors:</DataList.Label>
          <DataList.Value>
            {dataQuote.authors.map((author) => (
              <Link key={author.id} route={`/authors/${author.slug}`}>
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
              <Link key={tag.id} route={`/tags/${tag.name}`}>
                <Badge className='text-gray-600'>{tag.name}</Badge>
              </Link>
            ))}
          </DataList.Value>
        </DataList.Item>
      </DataList.Root> */}
    </Flex>
  );
};

export default QuotePage;
