import { GenerateMetadata } from '@estarlincito/utils';
import { findTag } from '@repo/content/quotely/lib/quotes';
import { host, siteName } from '@repo/content/quotely/settings';
import type { LocalesParams } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { QuoteList } from '@/features/quotes/components/quote-list';
import type { ParamsProps } from '@/types/params';

export const generateMetadata = async ({
  params,
}: ParamsProps & LocalesParams) => {
  const { slug, lng } = await params;
  const tagData = await findTag(slug);

  const metadata = GenerateMetadata.website({
    description: '',
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale: lng,
    siteName,
    title: tagData.tag.name,
    url: `${host}/${lng}/${tagData.tag.name}`,
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
    <Container>
      <Header summary='' title={tagData.tag.name} />
      <QuoteList
        route={route}
        {...searchParamsData}
        items={{ count: tagData.count, quotes: tagData.tag.quotes }}
      />
    </Container>
  );
};

export default TagPage;
