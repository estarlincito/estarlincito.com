/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Services } from '@repo/content/.mdxlayer/fixly/generated';
import { loadTranslations } from '@repo/content/fixly/locales';
import type { Locale } from '@repo/content/utils/locales';
import type { SearchParams } from '@repo/types';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { ServiceList } from '@/features/services/components/service-list';

interface CategoryProps {
  services: Services[];
  search: SearchParams;
}

const Category = async ({ services, search }: CategoryProps) => {
  const { category, meta, lang, urls } = services[0]!;
  const { labels } = await loadTranslations(lang as Locale);

  return (
    <Container>
      <Breadcrumb
        active={category}
        links={[{ label: labels.nav.services, route: urls.services }]}
      />
      <Header blockquote summary={meta.category.description} title={category} />
      <ServiceList {...search} route={urls.category} services={services} />
    </Container>
  );
};
export default Category;
