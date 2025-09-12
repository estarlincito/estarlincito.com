import {
  generateMetadata,
  generateStaticParams,
  getTopicPGContent,
} from '@repo/content/quotely/topics/topic/page';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { QuoteList } from '@/features/quotes/components/quote-list';

const Page = async ({
  params,
}: PageProps<'/[lng]/topics/[slug]/page/[page]'>) => {
  const content = await getTopicPGContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10'>
      <Header blockquote summary={content.summary} title={content.title} />
      <QuoteList quotes={content.quotes} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { Page as default, generateMetadata, generateStaticParams };
