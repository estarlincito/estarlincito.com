import { generateMetadata, getHomeContent } from '@repo/content/portfolio/home';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';

import { AboutSection } from '@/features/home/components/about-section';
import { CompetenciesSection } from '@/features/home/components/competencies-section';
import { ContactSection } from '@/features/home/components/contact-section';
import { EducationSection } from '@/features/home/components/education-section';
import { ProjectsSection } from '@/features/home/components/projects-section';
import { SkillsSection } from '@/features/home/components/skills-section';

export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;

  const { sections, title, bio } = await getHomeContent(lng);

  return (
    <Container>
      <AboutSection bio={bio} title={title} />
      <CompetenciesSection {...sections.competencies} />
      <EducationSection {...sections.education} />
      <SkillsSection {...sections.skills} />
      <ProjectsSection {...sections.projects} />
      <ContactSection
        form={sections.contact.form}
        title={sections.contact.title}
      />
    </Container>
  );
};

export default HomePage;
