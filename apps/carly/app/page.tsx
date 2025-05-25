import { Carly } from '@app/carly/components/carly';
import { METADATA } from '@app/carly/constants/home';
import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@repo/ui/layouts/container';

export const metadata = GenerateMetadata.website(METADATA);

const Page = () => (
  <Container>
    <Carly />
  </Container>
);

export default Page;
