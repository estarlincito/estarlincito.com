import { contactSchema } from '@repo/ui/schemas/contact';
import { z } from 'zod';

export const signinSchema = z.object({
  email: contactSchema.shape.email,
  password: z
    .string({ message: 'Please enter your password' })
    .nonempty({ message: 'Please enter your password' })
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(50, { message: 'Password must not exceed 50 characters' })
    .refine((val) => /[a-z]/.test(val), {
      message: 'Password must contain at least one lowercase letter',
    })
    .refine((val) => /[A-Z]/.test(val), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine((val) => /\d/.test(val), {
      message: 'Password must contain at least one number',
    })
    .refine((val) => /[\W_]/.test(val), {
      message: 'Password must contain at least one special character',
    }),
});
