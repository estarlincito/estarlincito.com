import type { LocalesParams } from '@repo/content/estarlincito/locales';
import { getInvoiceContent } from '@repo/content/fixly/invoice';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';

import { InvoiceForm } from '@/features/invoice/invoice-form';

// export { generateMetadata };

const InvoicePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;

  const { form, title } = await getInvoiceContent(lng);

  return (
    <Container size='3'>
      <Heading className='my-8'>{title}</Heading>
      <InvoiceForm {...form} />
    </Container>
  );
};

export default InvoicePage;
