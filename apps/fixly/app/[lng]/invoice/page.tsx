import { getInvoiceContent } from '@repo/content/fixly/invoice';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';

import { InvoiceForm } from '@/features/invoice/invoice-form';

const InvoicePage = async ({ params }: PageProps<'/[lng]/invoice'>) => {
  const { form, title } = await getInvoiceContent(params);

  return (
    <Container size='3'>
      <Heading className='my-8'>{title}</Heading>
      <InvoiceForm {...form} />
    </Container>
  );
};

export { InvoicePage as default };
