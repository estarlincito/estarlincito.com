import { GenerateMetadata, toSlug } from '@estarlincito/utils';
import {
  Badge,
  Card,
  Container,
  Flex,
  Link,
  Separator,
  Strong,
  Text,
} from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Header, Wrapper } from '@repo/ui';

import ClientBreadcrumb from '@/components/breadcrumb';
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

  const quoteData = await findQuote(slug);

  return (
    <Container size='4'>
      <Wrapper maxWidth='800px' m='auto'>
        <ClientBreadcrumb
          slug={[
            {
              route: quotely.quotes.path,
              title: quotely.quotes.title,
            },
            {
              route: `${url}/quotes/${toSlug(`${quoteData.id}`)}`,
              title: `Quote #${quoteData.id}`,
            },
          ]}
        />
        <Header title={`Quote #${quoteData.id}`} summary='' />

        <Card variant='ghost'>
          <Flex direction='column' gapY='4'>
            <Text size='7'>&ldquo;{quoteData.quote}&ldquo;</Text>
            <Separator size='4' />
            <Flex gapX='1'>
              {quoteData.authors.map(({ name, slug }, id) => (
                <Text key={id} color='gray'>
                  <Strong>Authors:</Strong>
                  <Link href={`/authors/${slug}`} underline='none' color='gray'>
                    {' '}
                    {name}
                  </Link>
                </Text>
              ))}
            </Flex>

            <Text color='gray'>
              <Strong>Source Name:</Strong> {quoteData.sourceName.name}
            </Text>

            {quoteData.sourceType.name.length >= 1 && (
              <Text color='gray'>
                <Strong>Source Type:</Strong> {quoteData.sourceType.name}
              </Text>
            )}

            {quoteData.reference.length >= 1 && (
              <Text color='gray'>
                <Strong>Reference:</Strong> {quoteData.reference}
              </Text>
            )}

            {quoteData.sourceUrl.length >= 1 && quoteData.sourceUrl !== '#' && (
              <Text color='gray'>
                <Strong>Source URl:</Strong> {quoteData.sourceUrl}
              </Text>
            )}

            <Flex gapX='1'>
              {quoteData.tags.map(({ name }, id) => (
                <Badge radius='medium' key={id} color='gray'>
                  <Link color='gray' href={`/tags/${name}`} underline='none'>
                    {name}
                  </Link>
                </Badge>
              ))}
            </Flex>
          </Flex>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default QuotePage;
