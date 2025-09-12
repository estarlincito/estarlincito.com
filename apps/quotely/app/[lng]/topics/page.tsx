import {
  generateMetadata,
  getTopicsContent,
} from '@repo/content/quotely/topics';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { TopicList } from '@/features/quotes/components/topic-list';

const TopicPage = async ({ params }: PageProps<'/[lng]/topics'>) => {
  const content = await getTopicsContent(params);

  return (
    <Container className='flex flex-col gap-y-10 justify-center'>
      <Header blockquote summary={content.summary} title={content.title} />
      <TopicList lng={content.lng} topics={content.topics} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        route={content.route}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { TopicPage as default, generateMetadata };
