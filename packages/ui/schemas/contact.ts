import { z } from 'zod';

export const contactSchema = z.object({
  company: z
    .string()
    .optional()
    .refine((val) => !val || (val.length >= 1 && val.length <= 100), {
      message: 'Company name must be between 1 and 100 characters',
    }),

  email: z
    .string({ message: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Invalid email format (e.g., name@icloud.com)' })
    .min(5, { message: 'Email must be at least 5 characters long' })
    .max(50, { message: 'Email must not exceed 50 characters' }),

  'first-name': z
    .string({ message: 'Please enter your first name' })
    .nonempty({ message: 'Please enter your first name' })
    .min(1, {
      message: 'First name must be at least 1 characters long',
    })
    .max(50, { message: 'First name must not exceed 50 characters' }),

  'last-name': z
    .string({ message: 'Please enter your last name' })
    .nonempty({ message: 'Please enter your last name' })
    .min(1, {
      message: 'Last name must be at least 1 characters long',
    })
    .max(50, { message: 'Last name must not exceed 50 characters' }),

  message: z
    .string({ message: 'Please enter your message' })
    .nonempty({ message: 'Please enter your message' })
    .min(5, { message: 'Message must be at least 5 characters long' })
    .max(500, { message: 'Message must not exceed 500 characters' }),

  'phone-number': z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        (val.length >= 10 && val.length <= 15 && /^\+?[0-9\s\-()]+$/.test(val)),
      {
        message: 'Invalid phone number format (e.g., +1 234-567-8901)',
      },
    ),
});

export type Contact = z.infer<typeof contactSchema>;
