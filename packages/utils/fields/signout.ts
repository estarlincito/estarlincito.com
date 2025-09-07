import { SigninFields } from '@repo/utils/fields/signin';
import type { Signout } from '@repo/utils/schemas/signout';

export const SignoutFields: { name: keyof Signout; type?: string }[] = [
  { name: 'first-name' },
  { name: 'last-name' },
  { name: 'username' },
  ...SigninFields,
];
