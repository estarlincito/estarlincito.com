import {
  generateMetadata,
  getHomeContent,
} from '@repo/content/estarlincito/home';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { CarlySection } from '@/features/home/components/carly-section';
import { ImwritingSection } from '@/features/home/components/imwriting-section';
import { QuotelySection } from '@/features/home/components/quotely-section';

export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;

  const { sections } = await getHomeContent(lng);

  return (
    <Container>
      <Header {...sections.header} />
      <ImwritingSection {...sections.imwriting} />
      <QuotelySection {...sections.quotely} />
      <CarlySection {...sections.carly} />
    </Container>
  );
};

export default HomePage;
