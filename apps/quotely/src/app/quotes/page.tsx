import { Container } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Header, SearchParamsProps } from '@repo/ui';

import QuoteList from '@/components/quotes/list';
import { getQuotes } from '@/lib/quotes';

export const { metadata } = quotely.quotes;

const QuotesPage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const quotesData = await getQuotes(params);

  return (
    <Container size='4'>
      <Header
        title={quotely.quotes.title}
        summary={quotely.quotes.description}
        slug={[{ route: quotely.quotes.path, title: quotely.quotes.title }]}
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
