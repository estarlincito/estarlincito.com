import { generateMetadata, getHomeContent } from '@repo/content/carly/home';
import { Container } from '@repo/ui/layouts/container';

import { Carly } from '@/features/home/components/carly';

const HomePage = async ({ params }: PageProps<'/[lng]'>) => {
  const content = await getHomeContent(params);

  return (
    <Container>
      <Carly {...content} />
    </Container>
  );
};

export { HomePage as default, generateMetadata };
