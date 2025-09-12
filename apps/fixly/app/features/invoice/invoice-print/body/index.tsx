import { Flex } from '@repo/ui/layouts/flex';

import type { InvoicePrintProps } from '@/features/invoice/invoice-print';

import { Details } from './detail';
import { Invoice } from './invoice';
import { Product } from './product';

export const Body = ({
  invoice,
  billingaddress,
  details,
  data,
  ...rest
}: Omit<
  InvoicePrintProps,
  'summary' | 'by' | 'signature' | 'slogan' | 'lng'
>) => (
  <Flex className='flex-col my-20'>
    <Invoice {...{ billingaddress, data, invoice }} />
    <Product {...{ ...rest, data }} />
    <Details {...{ data, details }} />
  </Flex>
);
