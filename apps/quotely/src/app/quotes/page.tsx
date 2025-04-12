import { quotely } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Header, type Links, type SearchParamsProps, Wrapper } from '@repo/ui';
import { headers } from 'next/headers';

import QuoteList from '@/components/quotes/list';
import { getQuotes } from '@/lib/quotes';

export const { metadata } = quotely.quotes;

const QuotesPage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const quotesData = await getQuotes(params);
  const pathname = await getPathname(headers);

  const links: Links = [
    { href: quotely.quotes.path, title: quotely.quotes.title },
  ];

  return (
    <Wrapper>
      <Header
        separator
        links={links}
        pathname={pathname}
        summary={quotely.quotes.description}
        title={quotely.quotes.title}
      />
      <QuoteList
        {...params}
        quotesData={quotesData}
        route={quotely.quotes.path}
      />
    </Wrapper>
  );
};

export default QuotesPage;
