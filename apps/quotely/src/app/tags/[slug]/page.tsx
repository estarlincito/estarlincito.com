import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Header, type SearchParamsProps } from '@repo/ui';

import ClientBreadcrumb from '@/components/breadcrumb';
import QuoteList from '@/components/quotes/list';
import { findTag } from '@/lib/quotes';
import { ParamsProps } from '@/types/params';

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
  const route = tagData.tag.name;

  return (
    <Container size='4'>
      <ClientBreadcrumb
        slug={[
          {
            route: quotely.tags.path,
            title: quotely.tags.title,
          },
          {
            route,
            title: tagData.tag.name,
          },
        ]}
      />
      <Header title={tagData.tag.name} summary='' />
      <QuoteList
        route={route}
        {...searchParamsData}
        quotesData={{ count: tagData.count, quotes: tagData.tag.quotes }}
      />
    </Container>
  );
};

export default TagPage;
