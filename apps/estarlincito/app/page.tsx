import { CarlyAction } from '@app/estarlincito/components/layout/home/carly';
import { ImwritingUpdate } from '@app/estarlincito/components/layout/home/imwriting';
import { QuotelyUpdate } from '@app/estarlincito/components/layout/home/quotely';
import { METADATA, SECTIONS } from '@app/estarlincito/constants/home';
import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';

export const metadata = GenerateMetadata.website(METADATA);

const Page = () => (
  <Container>
    <Header {...SECTIONS.header} />
    <ImwritingUpdate />
    <QuotelyUpdate />
    <CarlyAction />
  </Container>
);

export default Page;
console.log('check the path on project/... in the Breadcrumb');
