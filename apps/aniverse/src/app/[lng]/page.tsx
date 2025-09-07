import { generateMetadata, getHomeContent } from '@repo/content/aniverse/home';
import { Text } from '@repo/ui/components/text';
import { Container } from '@repo/ui/layouts/container';
import { pickLng } from '@repo/utils/lng';

const HomePage = async ({ params }: PageProps<'/[lng]'>) => {
  const lng = await pickLng(params);
  const { summary, title } = await getHomeContent(lng);

  return (
    <Container>
      <Text>{summary}</Text>
      <Text>{title}</Text>
    </Container>
  );
};

export { HomePage as default, generateMetadata };
