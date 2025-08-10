/* eslint-disable react/no-array-index-key */
import { Box } from '@repo/ui/components/box';
import { Heading } from '@repo/ui/components/heading';

import type { InvoicePrintProps } from '@/features/invoice/invoice-print';

export const Details = ({
  details,
  data,
}: Pick<InvoicePrintProps, 'details' | 'data'>) => (
  <Box className='mt-10'>
    <Heading as='h3'>{details}</Heading>
    <ul className='list-disc ml-5'>
      {data['invoice-details'].map((detail, key) => (
        <li key={key}>{detail}</li>
      ))}
    </ul>
  </Box>
);
