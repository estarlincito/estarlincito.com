import { generateMetadata, getHomeContent } from '@repo/content/myebook/home';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const content = await getHomeContent(lng);

  return (
    <Container>
      <Header summary={content.summary} title={content.title} />
    </Container>
  );
};

export default HomePage;
