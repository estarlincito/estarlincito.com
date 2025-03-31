import { estarlincito } from '@repo/constants';
import { Container, Header, Wrapper } from '@repo/ui';

import ClientBreadcrumb from '@/components/ui/breadcrumb';
import CardProjects from '@/components/ui/card-projects';
import CardWrapper from '@/components/ui/card-wrapper';
import { PROJECTS } from '@/constants/projects';
const { projects } = estarlincito;
export const { metadata } = projects;

const Page = () => {
  return (
    <Container size='4'>
      <Wrapper>
        <ClientBreadcrumb slug={[{ route: '/projects', title: 'Projects' }]} />
        <Header title={projects.title} summary={projects.description} />

        <CardWrapper>
          {PROJECTS.map(({ label, summary }, key) => (
            <CardProjects key={key} label={label} summary={summary} />
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Page;
