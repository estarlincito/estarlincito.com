import { imwriting } from '@repo/constants';
import { Header, Wrapper } from '@repo/ui';

const { home } = imwriting;
export const { metadata } = home;

const HomePage = () => (
  <Wrapper>
    <Header
      summary={home.description}
      title='Hey there! 👋 Welcome to Imwriting'
    />
  </Wrapper>
);

export default HomePage;
