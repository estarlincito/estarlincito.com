import { num } from '@estarlincito/utils';
import { contactSchema } from '@repo/ui';
import { z } from 'zod';

import { signinSchema } from './signin';

export const signoutSchema = z.object({
  email: contactSchema.shape['email'],
  'first-name': contactSchema.shape['first-name'],
  'last-name': contactSchema.shape['last-name'],
  password: signinSchema.shape['password'],
  username: z
    .string({ message: 'Please enter your username' })
    .nonempty({ message: 'Please enter your username' })
    .min(num('8'), { message: 'Username must be at least 8 characters long' })
    .max(num('20'), { message: 'Username must not exceed 20 characters' })
    .regex(/^[a-z]+$/, {
      message: 'Username must only contain lowercase letters (a-z)',
    }),
});

export type Signout = z.infer<typeof signoutSchema>;
