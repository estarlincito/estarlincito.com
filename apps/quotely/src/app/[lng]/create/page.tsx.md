import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';

import { CreateForm } from './form';

// export { generateMetadata } from '@repo/content/quotely/create';

const CratePage = async (_: LocalesParams) => (
  // const { lng } = await params;

  // summary={content.summary} title={content.title}
  <Container>
    <CreateForm />
  </Container>
);
export default CratePage;
