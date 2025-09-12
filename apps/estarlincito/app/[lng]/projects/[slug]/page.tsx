import {
  generateMetadata,
  generateStaticParams,
  getProjectContent,
} from '@repo/content/estarlincito/projects/project';
import { About } from '@repo/ui/pages/about';
import CatchAll from '@repo/ui/pages/catch-all';

const ProjectPage = async ({ params }: PageProps<'/[lng]/projects/[slug]'>) => {
  const content = await getProjectContent(params);
  if (!content) return CatchAll({ params });
  return <About {...content} />;
};

export { ProjectPage as default, generateMetadata, generateStaticParams };
