import { QuoteList } from '@app/quotely/components/quote-list';
import { findTag } from '@app/quotely/lib/quotes';
import { locale, siteName, url } from '@app/quotely/settings';
import type { ParamsProps } from '@app/quotely/types/params';
import { GenerateMetadata } from '@estarlincito/utils';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

export const generateMetadata = async ({ params }: ParamsProps) => {
  const { slug } = await params;
  const tagData = await findTag(slug);

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

  // const links: LinksType = [
  //   {
  //     label: quotely.tags.title,
  //     route: quotely.tags.path,
  //   },
  //   {
  //     label: tagData.tag.name,
  //     route,
  //   },
  // ];

  return (
    <Container>
      <Header summary='' title={tagData.tag.name} />
      <QuoteList
        route={route}
        {...searchParamsData}
        quotesData={{ count: tagData.count, quotes: tagData.tag.quotes }}
      />
    </Container>
  );
};

export default TagPage;
