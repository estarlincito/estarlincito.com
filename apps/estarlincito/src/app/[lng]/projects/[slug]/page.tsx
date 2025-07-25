import {
  generateMetadata,
  getProjectContent,
} from '@repo/content/estarlincito/project';
import type { Locale } from '@repo/content/utils/locales';
import { About } from '@repo/ui/pages/about';
import CatchAll from '@repo/ui/pages/catch-all';

interface PageProps {
  params: Promise<{ slug: string; lng: Locale }>;
}

export { generateMetadata };

const ProjectPage = async ({ params }: PageProps) => {
  const { slug, lng } = await params;
  const content = await getProjectContent(lng, slug);

  if (!content) return CatchAll;

  return <About {...content} />;
};

export default ProjectPage;
