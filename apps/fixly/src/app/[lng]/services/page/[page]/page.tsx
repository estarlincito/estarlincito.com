import {
  generateMetadata,
  generateStaticParams,
  getServicesPGContent,
} from '@repo/content/fixly/services/page';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { ServiceList } from '@/features/services/components/service-list';

const Page = async ({ params }: PageProps<'/[lng]/services/page/[page]'>) => {
  const content = await getServicesPGContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10'>
      <Header blockquote summary={content.summary} title={content.title} />
      <ServiceList cta={content.cta} services={content.services} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { Page as default, generateMetadata, generateStaticParams };
