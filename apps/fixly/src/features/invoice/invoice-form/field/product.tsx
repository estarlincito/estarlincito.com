/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import type { InvoiceContent } from '@repo/content/fixly/invoice';
import type { DotNestedKeys } from '@repo/content/utils/translator';
import { toCurrency } from '@repo/lib/currency';
import { Box } from '@repo/ui/components/box';
import { Button } from '@repo/ui/components/button';
import { Checkbox } from '@repo/ui/components/checkbox';
import { DataTable, type DataTableProps } from '@repo/ui/components/data-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';
import { Label } from '@repo/ui/components/label';
import { MoreHorizontal } from 'lucide-react';
import * as React from 'react';
import { z } from 'zod/v4';

import { zNumber } from '@/features/invoice/invoice-form/schema';

const dialogSchema = z.object({
  'product-count': zNumber('product-number'),
  'product-name': z
    .string()
    .nonempty({ message: 'validation.product-name.required' }),
  'product-number': zNumber('product-number'),
  'product-price': zNumber('product-price'),
});

type ProductData = z.infer<typeof dialogSchema>;

const columns: DataTableProps<ProductData>['columns'] = [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label='Select row'
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
      />
    ),
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => (
      <Checkbox
        aria-label='Select all'
        checked={
          table.getIsAllPageRowsSelected() ??
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(Boolean(value))
        }
      />
    ),
    id: 'select',
  },
  {
    accessorKey: 'product-number',
    cell: ({ row }) => row.getValue('product-number'),
    header: 'Nº',
  },
  {
    accessorKey: 'product-name',
    cell: ({ row }) => row.getValue('product-name'),
    header: 'Product',
  },
  {
    accessorKey: 'product-count',
    cell: ({ row }) => row.getValue('product-count'),
    header: 'Count',
  },
  {
    accessorKey: 'product-price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('product-price'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
      }).format(amount);

      return <Box>{formatted}</Box>;
    },
    header: 'Price',
  },
  {
    cell: ({ table, row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className='h-8 w-8 p-0' variant='ghost'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              // @ts-ignore
              table.options.setData(
                // @ts-ignore
                table.options.data.filter(({ id }) => id !== row.original.id),
              );
            }}
          >
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem>Edict</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    enableHiding: false,
    id: 'actions',
  },
];

export interface ProductFieldOpts {
  data: ProductData[];
  setData: (data: ProductData[]) => void;
  t: (key: DotNestedKeys<InvoiceContent['form']>) => string;
}

const useProduct = ({ data, setData, t }: ProductFieldOpts) =>
  function ProductField() {
    const props = {
      columns,
      data,
      dialogAction: t('fields.product-details.dialog-action'),
      dialogClose: t('fields.product-details.dialog-close'),
      dialogDescription: t('fields.product-details.dialog-description'),
      dialogSchema,
      dialogTitle: t('fields.product-details.dialog-title'),
      resolveField: {
        'product-price': (doc: ProductData) =>
          toCurrency(t('lng') as never, parseInt(doc['product-price'])),
      },
      setData,
    };

    return (
      <Box>
        <Label className='mb-2'>{t('fields.product-details.label')}</Label>
        <DataTable {...props} />
      </Box>
    );
  };

export { type ProductData, useProduct };
