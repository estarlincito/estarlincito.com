import {
  generateMetadata,
  getEbooksContent,
} from '@repo/content/myebook/ebooks';
import type { LocalesParams } from '@repo/content/utils/locales';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

export { generateMetadata };

const Ebooks = async ({ params }: SearchParamsProps & LocalesParams) => {
  const { lng } = await params;
  const content = await getEbooksContent(lng);

  return (
    <Container>
      <Header summary={content.summary} title={content.title} />
    </Container>
  );
};

export default Ebooks;
