import { z } from 'zod/v4';

const zNumber = (key: string) =>
  z
    .string()
    .nonempty({ message: `validation.${key}.required` })
    .refine((val) => !Number.isNaN(Number(val)), {
      message: `validation.${key}.format`,
    });

const InvoiceSchema = z.object({
  'client-name': z
    .string()
    .nonempty({ message: 'validation.client-name.required' }),
  'client-phone': z
    .string()
    .nonempty({ message: 'validation.client-phone.required' })
    .refine(
      (val) =>
        !val ||
        (val.length >= 10 && val.length <= 15 && /^\+?[0-9\s\-()]+$/.test(val)),
      {
        message: 'validation.client-phone.format',
      },
    ),
  discount: zNumber('discount'),
  'invoice-date': z.date(),

  subtotal: zNumber('subtotal'),
  totaldue: zNumber('totaldue'),
});

type InvoiceFields = z.infer<typeof InvoiceSchema>;

const defaultValues: InvoiceFields = {
  'client-name': '',
  'client-phone': '',
  discount: '',
  'invoice-date': new Date(),
  subtotal: '',
  totaldue: '',
};

export { defaultValues, type InvoiceFields, InvoiceSchema, zNumber };
