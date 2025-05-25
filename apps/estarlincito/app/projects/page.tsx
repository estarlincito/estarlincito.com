import { CardProjects } from '@app/estarlincito/components/ui/card-projects';
import { CardWrapper } from '@app/estarlincito/components/ui/card-wrapper';
import {
  METADATA,
  PROJECTS_DESCRIPTION,
  PROJECTS_TITLE,
  SECTIONS,
} from '@app/estarlincito/constants/projects';
import { GenerateMetadata } from '@estarlincito/utils';
import { Box } from '@repo/ui/components/box';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

export const metadata = GenerateMetadata.website(METADATA);

const Page = async () => (
  <Container>
    <Header summary={PROJECTS_DESCRIPTION} title={PROJECTS_TITLE} />

    <Box className='mt-8'>
      <CardWrapper>
        {SECTIONS.PROJECTS.items.map((item) => (
          <CardProjects key={item.title} {...item} />
        ))}
      </CardWrapper>
    </Box>
  </Container>
);

export default Page;
