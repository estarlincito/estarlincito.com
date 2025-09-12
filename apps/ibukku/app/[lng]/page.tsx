import { generateMetadata, getHomeContent } from '@repo/content/ibukku/home';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

const HomePage = async ({ params }: PageProps<'/[lng]'>) => {
  const content = await getHomeContent(params);

  return (
    <Container>
      <Header summary={content.summary} title={content.title} />
    </Container>
  );
};

export { HomePage as default, generateMetadata };
