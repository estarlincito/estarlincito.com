import {
  type CategoryProps,
  getCategoryContent,
} from '@repo/content/fixly/services/cat';
import { Pagination } from '@repo/ui/components/pagination';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { ServiceList } from '@/features/services/components/service-list';

const Category = async ({ params }: CategoryProps) => {
  const content = await getCategoryContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10'>
      <Header
        blockquote
        active={content.title}
        links={content.links}
        summary={content.summary}
        title={content.title}
      />
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
export default Category;
