import { Box as Main } from '@radix-ui/themes';
import { estarlincito } from '@repo/constants';
import { Container } from '@repo/ui';

import {
  About,
  Competencies,
  Education,
  Projects,
  Skills,
} from './components/layout';

export const { metadata } = estarlincito.home;

const Page = () => {
  return (
    <Container size='3'>
      <Main p='2'>
        <About />
        <Projects />
        <Competencies />
        <Education />
        {/* <Professional /> */}
        <Skills />
      </Main>
    </Container>
  );
};

export default Page;
