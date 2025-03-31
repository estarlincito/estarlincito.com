import { Container } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Header, type SearchParamsProps } from '@repo/ui';

import ClientBreadcrumb from '@/components/breadcrumb';
import QuoteList from '@/components/quotes/list';
import { getQuotes } from '@/lib/quotes';

export const { metadata } = quotely.quotes;

const QuotesPage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const quotesData = await getQuotes(params);

  return (
    <Container size='4'>
      <ClientBreadcrumb
        slug={[{ route: quotely.quotes.path, title: quotely.quotes.title }]}
      />
      <Header
        title={quotely.quotes.title}
        summary={quotely.quotes.description}
      />
      <QuoteList
        {...params}
        quotesData={quotesData}
        route={quotely.quotes.path}
      />
    </Container>
  );
};

export default QuotesPage;
