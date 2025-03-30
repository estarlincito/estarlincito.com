import { estarlincito } from '@repo/constants';
import { Container, Topics, Wrapper } from '@repo/ui';
const { projects } = estarlincito;
export const { metadata } = projects;
const Page = () => {
  return (
    <Container size='3'>
      <Wrapper align='center'>
        <Topics topics={projects.topics} />
      </Wrapper>
    </Container>
  );
};

export default Page;
