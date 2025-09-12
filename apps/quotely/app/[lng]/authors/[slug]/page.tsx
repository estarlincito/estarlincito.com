import {
  generateMetadata,
  generateStaticParams,
  getAuthorContent,
} from '@repo/content/quotely/authors/author';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { AuthorAvatar } from '@/features/quotes/components/author-avatar';
import { QuoteList } from '@/features/quotes/components/quote-list';

const AuthorPage = async ({ params }: PageProps<'/[lng]/authors/[slug]'>) => {
  const content = await getAuthorContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10'>
      <Flex className='flex-col items-center m-auto'>
        <AuthorAvatar fallback={content.title} src={content.avatar} />
        <Header
          separator
          className='text-center max-w-8/12'
          summary={content.summary}
          title={content.title}
        />
      </Flex>
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

export { AuthorPage as default, generateMetadata, generateStaticParams };
