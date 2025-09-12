import { Base64, GenerateMetadata, toSlug } from '@estarlincito/utils';
import { getPrintContent } from '@repo/content/fixly/invoice/print';
import { host, siteName } from '@repo/content/fixly/settings';
import type { LocalesParams } from '@repo/content/shared/locales';
import { Container } from '@repo/ui/layouts/container';
import { pickLng } from '@repo/utils/lng';

import {
  InvoicePrint,
  type InvoicePrintProps,
} from '@/features/invoice/invoice-print';

export const generateMetadata = async ({
  searchParams,
  params,
}: PrintProps) => {
  const lng = await pickLng(params);

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
  const content = await getPrintContent(params);

  return (
    <Container className='print-only' size='3'>
      <InvoicePrint {...{ ...content, data }} />
    </Container>
  );
};

export { PrintPage as default };
