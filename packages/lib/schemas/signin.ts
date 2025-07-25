import { z } from 'zod/v4';

import { ContactSchema } from './contact';

// --- Schema & Types ---
export const SigninSchema = z.object({
  email: ContactSchema.shape.email,
  password: z
    .string()
    .nonempty({ message: 'validation.password.required' })
    .min(8, { message: 'validation.password.min' })
    .max(50, { message: 'validation.password.max' })
    .refine((val) => /[a-z]/.test(val), {
      message: 'validation.password.format-lowercase',
    })
    .refine((val) => /[A-Z]/.test(val), {
      message: 'validation.password.format-uppercase',
    })
    .refine((val) => /\d/.test(val), {
      message: 'validation.password.format-number',
    })
    .refine((val) => /[\W_]/.test(val), {
      message: 'validation.password.format-special',
    }),
});

export type Signin = z.infer<typeof SigninSchema>;
