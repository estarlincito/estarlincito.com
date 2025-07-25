import {
  generateMetadata,
  getAboutContent,
} from '@repo/content/estarlincito/about';
import type { LocalesParams } from '@repo/content/utils/locales';
import { About } from '@repo/ui/pages/about';

export { generateMetadata };

const AboutPage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const content = await getAboutContent(lng);

  return <About {...content} />;
};

export default AboutPage;
