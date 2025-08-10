import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui/components/table';

import type { InvoicePrintProps } from '@/features/invoice/invoice-print';

type ProductProps = Pick<
  InvoicePrintProps,
  'totaldue' | 'discount' | 'subtotal' | 'price' | 'amount' | 'product' | 'data'
>;

export const Product = ({
  product,
  amount,
  price,
  data,
  subtotal,
  discount,
  totaldue,
}: ProductProps) => {
  const heads = ['Nº', product, amount, price];

  const paymentBreakdown = [
    { label: subtotal, value: data.subtotal },
    { label: discount, value: data.discount },
    { label: totaldue, value: data.totaldue },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow className='bg-amber-600 hover:bg-amber-600'>
          {heads.map((head) => (
            <TableHead
              className='text-center border text-white font-bold'
              key={`table-row-${head}`}
            >
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data['product-details'].map(({ id, ...rest }) => (
          <TableRow className='hover:bg-white' key={id}>
            {Object.entries(rest).map(([key, value]) => (
              <TableCell className='border' key={key}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow className='bg-white hover:bg-white border-0'>
          <TableCell className='p-10' colSpan={4} />
        </TableRow>
        {paymentBreakdown.map(({ label, value }) => (
          <TableRow className='bg-white hover:bg-white border-0' key={label}>
            <TableCell className='font-bold p-0' colSpan={2}>
              {label}:
            </TableCell>
            <TableCell className='font-bold text-right p-0' colSpan={2}>
              {value}
            </TableCell>
          </TableRow>
        ))}
      </TableFooter>
    </Table>
  );
};
