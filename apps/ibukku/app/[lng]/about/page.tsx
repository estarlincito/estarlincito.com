import { generateMetadata, getAboutContent } from '@repo/content/ibukku/about';
import { About } from '@repo/ui/pages/about';

const AboutPage = async ({ params }: PageProps<'/[lng]/about'>) => {
  const content = await getAboutContent(params);

  return <About {...content} />;
};

export { AboutPage as default, generateMetadata };
