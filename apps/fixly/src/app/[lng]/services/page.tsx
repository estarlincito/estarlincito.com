import { loadTranslations } from '@repo/content/fixly/locales';
import type { LocalesParams } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { ServiceList } from '@/features/services/components/service-list';
import { allServices } from '@/lib/service';

type ServicesProps = LocalesParams & SearchParamsProps;

const ServicesPage = async ({ params, searchParams }: ServicesProps) => {
  const { lng } = await params;
  const search = await searchParams;
  const header = (await loadTranslations(lng)).services;

  return (
    <Container>
      <Header {...header} blockquote />
      <ServiceList
        {...search}
        route={`/${lng}/services`}
        services={allServices[lng]}
      />
    </Container>
  );
};

export default ServicesPage;
