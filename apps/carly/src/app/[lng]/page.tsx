import { generateMetadata, getHomeContent } from '@repo/content/carly/home';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';

import { Carly } from '@/features/home/components/carly';

export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const content = await getHomeContent(lng);

  return (
    <Container>
      <Carly {...content} />
    </Container>
  );
};

export default HomePage;
