import { apiFetch } from '@estarlincito/utils';
import {
  generateMetadata,
  getQuotesContent,
} from '@repo/content/quotely/quotes';
import type { LocalesParams } from '@repo/content/utils/locales';
import { returnSchema } from '@repo/lib/schemas/quotes/return';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { QuoteList } from '@/features/quotes/components/quote-list';

export { generateMetadata };

const QuotesPage = async ({
  params,
  searchParams,
}: SearchParamsProps & LocalesParams) => {
  const { lng } = await params;

  const res = await apiFetch(
    'https://quotely.estarlincito.workers.dev/quotes??offset=0&limit=200',
    {
      headers: {
        Authorization: process.env.ADMIN_TOKEN ?? '',
      },
    },
  );

  const items = returnSchema.quotes.parse(await res.json());

  const { sections } = await getQuotesContent(lng);

  return (
    <Container>
      <Header {...sections.header} />
      <QuoteList
        {...await searchParams}
        items={items}
        route={sections.quoteList.route}
      />
    </Container>
  );
};

export default QuotesPage;
