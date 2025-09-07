import {
  generateMetadata,
  getProjectsContent,
} from '@repo/content/estarlincito/projects';
import { Box } from '@repo/ui/components/box';
import { Container } from '@repo/ui/layouts/container';
import { Gallery } from '@repo/ui/layouts/gallery';
import { Header } from '@repo/ui/layouts/header';

import { CardProject } from '@/features/projects/components/card-project';

const ProjectsPage = async ({ params }: PageProps<'/[lng]/projects'>) => {
  const { sections, summary, title } = await getProjectsContent(params);

  return (
    <Container>
      <Header summary={summary} title={title} />
      <Box className='mt-8'>
        <Gallery>
          {sections.projects.items.map((item) => (
            <CardProject key={item.title} {...item} />
          ))}
        </Gallery>
      </Box>
    </Container>
  );
};

export { ProjectsPage as default, generateMetadata };
