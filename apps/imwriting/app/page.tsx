import { Latest } from '@app/imwriting/app/components/latest';
import { Topics } from '@app/imwriting/app/components/topics';
import { METADATA, SECTIONS } from '@app/imwriting/constants/home';
import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
export const metadata = GenerateMetadata.website(METADATA);

const HomePage = () => (
  <Container className='mt-5' size='3'>
    <Header {...SECTIONS.HEADER} />
    <Latest />
    <Topics />
  </Container>
);

export default HomePage;
