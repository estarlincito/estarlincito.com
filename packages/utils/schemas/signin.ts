import { passwordSchema } from '@repo/content/shared/schemas/password';
import { z } from 'zod/v4';

import { ContactSchema } from './contact';

// --- Schema & Types ---
export const SigninSchema = z.object({
  email: ContactSchema.shape.email,
  password: passwordSchema,
});

export type Signin = z.infer<typeof SigninSchema>;
