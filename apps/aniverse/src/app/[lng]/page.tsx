import { generateMetadata, getHomeContent } from '@repo/content/aniverse/home';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Text } from '@repo/ui/components/text';
import { Container } from '@repo/ui/layouts/container';

export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const { summary, title } = await getHomeContent(lng);

  return (
    <Container>
      <Text>{summary}</Text>
      <Text>{title}</Text>
    </Container>
  );
};

export default HomePage;
