import { Base64, GenerateMetadata, toSlug } from '@estarlincito/utils';
import type { LocalesParams } from '@repo/content/estarlincito/locales';
import { getPrintContent } from '@repo/content/fixly/invoice/print';
import { host, siteName } from '@repo/content/fixly/settings';
import { Container } from '@repo/ui/layouts/container';

import {
  InvoicePrint,
  type InvoicePrintProps,
} from '@/features/invoice/invoice-print';

export const generateMetadata = async ({
  searchParams,
  params,
}: PrintProps) => {
  const { lng } = await params;

  const data = JSON.parse(
    Base64.decode((await searchParams).data),
  ) as InvoicePrintProps['data'];

  const title = toSlug(`${data['client-name']}-${data['invoice-date']}`);

  return GenerateMetadata.website({
    description: '',
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale: lng,
    siteName,
    title,
    url: `${host}/${lng}`,
  });
};

interface PrintProps extends LocalesParams {
  searchParams: Promise<{ data: string }>;
}
const PrintPage = async ({ params, searchParams }: PrintProps) => {
  const data = JSON.parse(Base64.decode((await searchParams).data));
  const { lng } = await params;
  const content = await getPrintContent(lng);

  return (
    <Container className='print-only' size='3'>
      <InvoicePrint {...{ ...content, data }} />
    </Container>
  );
};

export default PrintPage;
