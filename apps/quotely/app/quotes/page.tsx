import { QuoteList } from '@app/quotely/components/quote-list';
import {
  METADATA,
  QUOTES_ROUTE,
  SECTIONS,
} from '@app/quotely/constants/quotes';
import { getQuotes } from '@app/quotely/lib/quotes';
import { GenerateMetadata } from '@estarlincito/utils';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

export const metadata = GenerateMetadata.website(METADATA);

const QuotesPage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const quotesData = await getQuotes(params);

  return (
    <Container>
      <Header {...SECTIONS.HEADER} />
      <QuoteList {...params} quotesData={quotesData} route={QUOTES_ROUTE} />
    </Container>
  );
};

export default QuotesPage;
