import { z } from 'zod/v4';

export const ContactSchema = z.object({
  company: z
    .string()
    .optional()
    .refine((val) => !val || (val.length >= 1 && val.length <= 100), {
      message: 'validation.company.length',
    }),

  email: z
    .email({ message: 'validation.email.format' })
    .nonempty({ message: 'validation.email.required' })
    .min(5, { message: 'validation.email.min' })
    .max(50, { message: 'validation.email.max' }),

  'first-name': z
    .string()
    .nonempty({ message: 'validation.first-name.required' })
    .min(1, {
      message: 'validation.first-name.min',
    })
    .max(50, { message: 'validation.first-name.max' }),

  'last-name': z
    .string()
    .nonempty({ message: 'validation.last-name.required' })
    .min(1, {
      message: 'validation.last-name.min',
    })
    .max(50, { message: 'validation.last-name.max' }),

  message: z
    .string()
    .nonempty({ message: 'validation.message.required' })
    .min(5, { message: 'validation.message.min' })
    .max(500, { message: 'validation.message.max' }),

  'phone-number': z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        (val.length >= 10 && val.length <= 15 && /^\+?[0-9\s\-()]+$/.test(val)),
      {
        message: 'validation.phone-number.format',
      },
    ),

  subject: z
    .string()
    .nonempty({ message: 'validation.message.required' })
    .refine((val) => !val || (val.length >= 1 && val.length <= 100), {
      message: 'validation.subject.length',
    }),
});

export type Contact = z.infer<typeof ContactSchema>;
