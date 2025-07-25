import { z } from 'zod/v4';

import { ContactSchema } from './contact';
import { SigninSchema } from './signin';

export const SignoutSchema = z.object({
  email: ContactSchema.shape.email,
  'first-name': ContactSchema.shape['first-name'],
  'last-name': ContactSchema.shape['last-name'],
  password: SigninSchema.shape.password,
  username: z
    .string()
    .nonempty({ message: 'validation.username.required' })
    .min(8, { message: 'validation.username.min' })
    .max(20, { message: 'validation.username.max' })
    .regex(/^[a-z]+$/, {
      message: 'validation.username.format',
    }),
});

export type Signout = z.infer<typeof SignoutSchema>;
