import { METADATA, SECTIONS } from '@app/myebook/constants/home';
import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

export const metadata = GenerateMetadata.website(METADATA);

const HomePage = () => (
  <Container>
    <Header {...SECTIONS.HEADER} />
  </Container>
);

export default HomePage;
