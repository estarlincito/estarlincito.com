import {
  generateMetadata,
  getServicesContent,
} from '@repo/content/fixly/services';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { ServiceList } from '@/features/services/components/service-list';

const ServicesPage = async ({ params }: PageProps<'/[lng]/services'>) => {
  const content = await getServicesContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10'>
      <Header blockquote summary={content.summary} title={content.title} />
      <ServiceList cta={content.cta} services={content.services} />
      <Pagination
        page={content.page}
        pagination={content.pagination}
        route={content.route}
        totalPages={content.totalPages}
      />
    </Container>
  );
};

export { ServicesPage as default, generateMetadata };
