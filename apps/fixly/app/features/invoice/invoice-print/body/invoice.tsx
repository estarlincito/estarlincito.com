import { Box } from '@repo/ui/components/box';
import { Heading } from '@repo/ui/components/heading';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';

import type { InvoicePrintProps } from '@/features/invoice/invoice-print';

export const Invoice = ({
  invoice,
  billingaddress,
  data,
}: Pick<InvoicePrintProps, 'billingaddress' | 'invoice' | 'data'>) => (
  <Box>
    <Heading as='h3' className='text-center mb-10'>
      {invoice}
    </Heading>

    <Flex className='justify-between'>
      <Box>
        <Heading as='h5'>{billingaddress}</Heading>
        <Text unstyled>{data['client-name']}</Text>
        <Text unstyled>{data['client-phone']}</Text>
      </Box>
      <Heading as='h5'>{data['invoice-date']}</Heading>
    </Flex>
  </Box>
);
