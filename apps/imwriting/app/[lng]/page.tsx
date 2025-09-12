import { generateMetadata, getHomeContent } from '@repo/content/imwriting/home';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { pickLng } from '@repo/utils/lng';

import { HomeLatest } from '@/features/home/components/home-latest';
import { HomeTopics } from '@/features/home/components/home-topics';

const HomePage = async ({ params }: PageProps<'/[lng]'>) => {
  const lng = await pickLng(params);
  const { sections } = await getHomeContent(lng);

  return (
    <Container className='mt-5' size='3'>
      <Header {...sections.header} />
      <HomeLatest {...sections.latest} />
      <HomeTopics {...sections.topics} />
    </Container>
  );
};

export { HomePage as default, generateMetadata };
