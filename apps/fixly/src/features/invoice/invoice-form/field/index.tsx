/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import type { InvoiceContent } from '@repo/content/fixly/invoice';
import type { DotNestedKeys } from '@repo/content/utils/translator';
import { DataTable } from '@repo/ui/components/data-table';
import { DatePicker } from '@repo/ui/components/date-picker';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Textarea } from '@repo/ui/components/textarea';
import * as React from 'react';
import type { UseFormReturn } from 'react-hook-form';

import type { InvoiceFields } from '@/features/invoice/invoice-form/schema';

interface Field {
  name: keyof InvoiceFields;
  variant?: 'Input' | 'DatePicker';
}

import { type ProductFieldOpts, useProduct } from './product';
type FieldKeys = 'clientInfo' | 'invoiceInfo' | 'paymentInfo';

const fields: Record<FieldKeys, Field[]> = {
  clientInfo: [{ name: 'client-name' }, { name: 'client-phone' }],
  invoiceInfo: [{ name: 'invoice-date', variant: 'DatePicker' }],
  paymentInfo: [
    { name: 'subtotal' },
    { name: 'discount' },
    { name: 'totaldue' },
  ],
};

const useField = (
  form: UseFormReturn<InvoiceFields>,
  t: (key: DotNestedKeys<InvoiceContent['form']>) => string,
  opts: Omit<ProductFieldOpts, 't'>,
) => {
  const ProductField = useProduct({ ...opts, t });

  const renderField = ({ name, variant = 'Input', ...rest }: Field) => {
    const errorKey = form.formState.errors[name]?.message;
    const Field = { DataTable, DatePicker, Input, Textarea }[variant];

    return (
      <FormField
        control={form.control}
        key={name}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t(`fields.${name}.label`)}</FormLabel>
            <FormControl>
              <Field
                lang={t('lng')}
                placeholder={t(`fields.${name}.placeholder`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                  }
                }}
                {...rest}
                {...(field as any)}
              />
            </FormControl>

            {errorKey && <FormMessage>{t(errorKey as never)}</FormMessage>}
          </FormItem>
        )}
      />
    );
  };

  return {
    fields,
    ProductField,
    renderField,
  };
};

export { useField };
