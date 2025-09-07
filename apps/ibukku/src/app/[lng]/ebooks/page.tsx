import {
  generateMetadata,
  getEbooksContent,
} from '@repo/content/ibukku/ebooks';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

const EbooksPage = async ({ params }: PageProps<'/[lng]/ebooks'>) => {
  const content = await getEbooksContent(params);

  return (
    <Container>
      <Header summary={content.summary} title={content.title} />
    </Container>
  );
};

export { EbooksPage as default, generateMetadata };
