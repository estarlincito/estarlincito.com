import {
  generateMetadata,
  getHomeContent,
} from '@repo/content/estarlincito/home';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { CarlySection } from '@/features/home/components/carly-section';
import { ImwritingSection } from '@/features/home/components/imwriting-section';
import { QuotelySection } from '@/features/home/components/quotely-section';

const HomePage = async ({ params }: PageProps<'/[lng]'>) => {
  const { sections } = await getHomeContent(params);

  return (
    <Container>
      <Header {...sections.header} />
      <ImwritingSection {...sections.imwriting} />
      <QuotelySection {...sections.quotely} />
      <CarlySection {...sections.carly} />
    </Container>
  );
};

export { HomePage as default, generateMetadata };
