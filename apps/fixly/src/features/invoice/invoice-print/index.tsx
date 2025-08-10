'use client';

import type { PrintContent } from '@repo/content/fixly/invoice/print';
import { Grid } from '@repo/ui/layouts/grid';
import { cn } from '@repo/ui/lib/utils';

import type { ProductData } from '@/features/invoice/invoice-form/field/product';
import type { InvoiceFields } from '@/features/invoice/invoice-form/schema';

import { Body } from './body';
import { Footer } from './footer';
import { Header } from './header';

interface Product extends ProductData {
  id: number;
}

interface Data extends Omit<InvoiceFields, 'invoice-date'> {
  'product-details': Product[];
  'invoice-details': string[];
  'invoice-date': string;
}

export interface InvoicePrintProps extends PrintContent {
  data: Data;
}

export const InvoicePrint = ({
  summary,
  by,
  lng,
  slogan,
  signature,
  data,
  ...rest
}: InvoicePrintProps) => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <Grid
      className={cn(
        'w-[816px] min-h-[1056px] p-5 grid-rows-[auto_1fr_auto]',
        'bg-white',
        'text-black',
      )}
      onClick={handlePrint}
    >
      <Header {...{ by, lng, summary }} />
      <Body {...{ ...rest, data }} />
      <Footer {...{ signature, slogan }} />
    </Grid>
  );
};
