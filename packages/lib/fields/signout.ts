import { SigninFields } from '@repo/lib/fields/signin';
import type { Signout } from '@repo/lib/schemas/signout';

export const SignoutFields: { name: keyof Signout; type?: string }[] = [
  { name: 'first-name' },
  { name: 'last-name' },
  { name: 'username' },
  ...SigninFields,
];
