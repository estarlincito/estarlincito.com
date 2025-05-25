import { CreateForm } from '@app/quotely/app/create/form';
import { METADATA } from '@app/quotely/constants/create';
import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@repo/ui/layouts/container';

export const metadata = GenerateMetadata.website(METADATA);

const CratePage = () => (
  <Container>
    <CreateForm />
  </Container>
);

export default CratePage;
