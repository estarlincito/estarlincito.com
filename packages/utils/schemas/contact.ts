import { emailSchema } from '@repo/content/shared/schemas/email';
import { firstNameSchema } from '@repo/content/shared/schemas/first-name';
import { lastNameSchema } from '@repo/content/shared/schemas/last-name';
import { phoneNumberSchema } from '@repo/content/shared/schemas/phone-number';
import { z } from 'zod/v4';

export const ContactSchema = z.object({
  company: z
    .string()
    .optional()
    .refine((val) => !val || (val.length >= 1 && val.length <= 100), {
      message: 'validation.company.length',
    }),

  email: emailSchema,
  'first-name': firstNameSchema,
  'last-name': lastNameSchema,

  message: z
    .string()
    .nonempty({ message: 'validation.message.required' })
    .min(5, { message: 'validation.message.min' })
    .max(500, { message: 'validation.message.max' }),

  'phone-number': phoneNumberSchema,

  subject: z
    .string()
    .nonempty({ message: 'validation.message.required' })
    .refine((val) => !val || (val.length >= 1 && val.length <= 100), {
      message: 'validation.subject.length',
    }),
});

export type Contact = z.infer<typeof ContactSchema>;
