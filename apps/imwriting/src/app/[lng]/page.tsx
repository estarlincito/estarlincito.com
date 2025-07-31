import { getHomeContent } from '@repo/content/imwriting/home';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

import { HomeLatest } from '@/features/home/components/home-latest';
import { HomeTopics } from '@/features/home/components/home-topics';

export { generateMetadata } from '@repo/content/imwriting/home';

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const { sections } = await getHomeContent(lng);

  return (
    <Container className='mt-5' size='3'>
      <Header {...sections.header} />
      <HomeLatest {...sections.latest} />
      <HomeTopics {...sections.topics} />
    </Container>
  );
};

export default HomePage;
