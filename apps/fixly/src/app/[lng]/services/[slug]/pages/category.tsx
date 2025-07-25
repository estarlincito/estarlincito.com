/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Services } from '@repo/content/.mdxlayer/fixly/generated';
import type { SearchParams } from '@repo/types';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { ServiceList } from '@/features/services/components/service-list';

interface CategoryProps {
  services: Services[];
  search: SearchParams;
}

const Category = ({ services, search }: CategoryProps) => {
  const { category, meta, slugs, breadcrumb } = services[0]!;

  return (
    <Container>
      <Breadcrumb active={category} links={breadcrumb.category} />
      <Header blockquote summary={meta.category.description} title={category} />
      <ServiceList {...search} route={slugs.category} services={services} />
    </Container>
  );
};
export default Category;
