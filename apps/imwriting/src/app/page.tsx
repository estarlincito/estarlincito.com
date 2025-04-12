import { imwriting } from '@repo/constants';
import { Header, Wrapper } from '@repo/ui';

import Latest from './components/latest';
import Topics from './components/topics';

export const { metadata } = imwriting.home;

const HomePage = () => (
  <Wrapper>
    <Header
      summary={imwriting.home.description}
      title={`Hey there! 👋 Welcome to ${imwriting.home.title}`}
    />

    <Latest />
    <Topics />
  </Wrapper>
);

export default HomePage;
