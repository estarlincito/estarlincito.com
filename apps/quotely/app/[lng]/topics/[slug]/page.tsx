import {
  generateMetadata,
  generateStaticParams,
  getTopicContent,
} from '@repo/content/quotely/topics/topic';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { QuoteList } from '@/features/quotes/components/quote-list';

const TopicPage = async ({ params }: PageProps<'/[lng]/topics/[slug]'>) => {
  const content = await getTopicContent(params);
  if (!content) return CatchAll({ params });

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

export { TopicPage as default, generateMetadata, generateStaticParams };
