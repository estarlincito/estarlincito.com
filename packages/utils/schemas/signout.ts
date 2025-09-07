import { emailSchema } from '@repo/content/shared/schemas/email';
import { firstNameSchema } from '@repo/content/shared/schemas/first-name';
import { lastNameSchema } from '@repo/content/shared/schemas/last-name';
import { passwordSchema } from '@repo/content/shared/schemas/password';
import { usernameSchema } from '@repo/content/shared/schemas/username';
import { z } from 'zod/v4';

export const SignoutSchema = z.object({
  email: emailSchema,
  'first-name': firstNameSchema,
  'last-name': lastNameSchema,
  password: passwordSchema,
  username: usernameSchema,
});

export type Signout = z.infer<typeof SignoutSchema>;
