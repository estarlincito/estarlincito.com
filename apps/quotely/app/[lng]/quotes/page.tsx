import {
  generateMetadata,
  getQuotesContent,
} from '@repo/content/quotely/quotes';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { QuoteList } from '@/features/quotes/components/quote-list';

const QuotesPage = async ({ params }: PageProps<'/[lng]/quotes'>) => {
  const content = await getQuotesContent(params);

  return (
    <Container className='flex flex-col gap-y-10'>
      <Header blockquote summary={content.summary} title={content.title} />
      <QuoteList quotes={content.quotes} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        route={content.route}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { QuotesPage as default, generateMetadata };
