'use client';
import { apiFetch, Base64 } from '@estarlincito/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import type { InvoiceContent } from '@repo/content/fixly/invoice';
import { host } from '@repo/content/fixly/settings';
import { createTranslator } from '@repo/content/utils/translator';
import { toCurrency } from '@repo/lib/currency';
import { Box } from '@repo/ui/components/box';
import { useData } from '@repo/ui/components/data-table';
import { Form, FormAction } from '@repo/ui/components/form';
import { Label } from '@repo/ui/components/label';
import { Listify, useListify } from '@repo/ui/components/listify';
import { Flex } from '@repo/ui/layouts/flex';
import { Grid } from '@repo/ui/layouts/grid';
import { cn } from '@repo/ui/lib/utils';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useField } from './field';
import { type ProductData } from './field/product';
import { defaultValues, type InvoiceFields, InvoiceSchema } from './schema';

export const InvoiceForm = (translations: InvoiceContent['form']) => {
  const router = useRouter();
  const t = useMemo(() => createTranslator(translations), [translations]);
  const [value, setValue] = useListify([]);
  const [productData, productsetData] = useData<ProductData>([]);

  const form = useForm<InvoiceFields>({
    defaultValues,
    resolver: zodResolver(InvoiceSchema),
  });

  const { fields, renderField, ProductField } = useField(form, t, {
    data: productData,
    setData: productsetData,
  });

  const onSubmit = async (values: InvoiceFields) => {
    const discount = parseInt(values.discount);
    const subtotal = parseInt(values.subtotal);
    const totaldue = parseInt(values.totaldue) === 0 ? 0 : subtotal - discount;

    const toLocalCurrency = (value_: number) =>
      toCurrency(translations.lng, value_);

    const date = new Intl.DateTimeFormat(translations.lng, {
      dateStyle: 'medium',
    }).format(new Date(values['invoice-date']));

    const data = Base64.encode(
      JSON.stringify({
        ...values,
        discount: toLocalCurrency(discount),
        'invoice-date': date,
        'invoice-details': value,
        'product-details': productData,
        subtotal: toLocalCurrency(subtotal),
        totaldue: toLocalCurrency(totaldue),
      }),
    );

    try {
      await apiFetch(`${host}/api/invoice`, {
        body: {
          values: data,
        },
        method: 'POST',
      });

      router.push(`/${translations.lng}/invoice/print?data=${data}`);
    } catch {
      toast.error(t('invoice_error'));
    }
  };

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-6'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {fields.invoiceInfo.slice(0, 1).map(renderField)}

        <Flex className={cn('gap-5 flex-col', 'sm:flex-row')}>
          {fields.clientInfo.map((f) => (
            <Box className='sm:w-1/2' key={f.name}>
              {renderField(f)}
            </Box>
          ))}
        </Flex>
        <ProductField />

        <Grid className='gap-2'>
          <Label>{t('fields.invoice-details.label')}</Label>
          <Listify
            placeholder={t('fields.invoice-details.placeholder')}
            setValue={setValue}
            value={value}
          />
        </Grid>

        {fields.paymentInfo.slice(0, 3).map((f) => (
          <Box className='sm:w-1/3' key={f.name}>
            {renderField(f)}
          </Box>
        ))}

        <FormAction
          disabled={form.formState.isSubmitting}
          loadinglabel={t('actions.loading')}
          submitlabel={t('actions.submit')}
        />
      </form>
    </Form>
  );
};
