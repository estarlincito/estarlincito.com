import { estarlincito } from '@repo/constants';
import { Wrapper } from '@repo/ui';

import {
  About,
  Competencies,
  Education,
  Projects,
  Skills,
} from './components/layout';

export const { metadata } = estarlincito.home;

const Page = () => (
  <Wrapper>
    <About />
    <Projects />
    <Competencies />
    <Education />
    {/* <Professional /> */}
    <Skills />
  </Wrapper>
);

export default Page;
