import { num } from '@estarlincito/utils';
import { z } from 'zod';

export const contactSchema = z.object({
  company: z
    .string({ message: 'Please enter your company name' })
    .nonempty({ message: 'Please enter your company name' })
    .min(num('1'), {
      message: 'Company name must be at least 1 characters long',
    })
    .max(num('100'), {
      message: 'Company name must not exceed 100 characters',
    }),

  email: z
    .string({ message: 'Please enter your email' })
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Invalid email format (e.g., name@icloud.com)' })
    .min(num('5'), { message: 'Email must be at least 5 characters long' })
    .max(num('50'), { message: 'Email must not exceed 50 characters' }),

  'first-name': z
    .string({ message: 'Please enter your first name' })
    .nonempty({ message: 'Please enter your first name' })
    .min(num('1'), {
      message: 'First name must be at least 1 characters long',
    })
    .max(num('50'), { message: 'First name must not exceed 50 characters' }),

  'last-name': z
    .string({ message: 'Please enter your last name' })
    .nonempty({ message: 'Please enter your last name' })
    .min(num('1'), {
      message: 'Last name must be at least 1 characters long',
    })
    .max(num('50'), { message: 'Last name must not exceed 50 characters' }),

  message: z
    .string({ message: 'Please enter your message' })
    .nonempty({ message: 'Please enter your message' })
    .min(num('5'), { message: 'Message must be at least 5 characters long' })
    .max(num('500'), { message: 'Message must not exceed 500 characters' }),
});

export type Contact = z.infer<typeof contactSchema>;
