import {
  generateMetadata,
  generateStaticParams,
  getTopicsPGContent,
} from '@repo/content/quotely/topics/page';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { TopicList } from '@/features/quotes/components/topic-list';

const Page = async ({ params }: PageProps<'/[lng]/topics/page/[page]'>) => {
  const content = await getTopicsPGContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10 justify-center'>
      <Header blockquote summary={content.summary} title={content.title} />
      <TopicList lng={content.lng} topics={content.topics} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { Page as default, generateMetadata, generateStaticParams };
