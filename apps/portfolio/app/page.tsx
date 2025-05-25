import { About } from '@app/portfolio/components/layout/about';
import { Competencies } from '@app/portfolio/components/layout/competencies';
import { Contact } from '@app/portfolio/components/layout/contact';
import { Education } from '@app/portfolio/components/layout/education';
import { Projects } from '@app/portfolio/components/layout/projects';
import { Skills } from '@app/portfolio/components/layout/skills';
import { METADATA } from '@app/portfolio/constants/home';
import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@repo/ui/layouts/container';

export const metadata = GenerateMetadata.website(METADATA);

const Page = () => (
  <Container>
    <About />
    <Competencies />
    <Education />
    <Skills />
    <Projects />
    <Contact />
  </Container>
);

export default Page;
