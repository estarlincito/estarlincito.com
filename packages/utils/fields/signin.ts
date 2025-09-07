import type { Signin } from '@repo/utils/schemas/signin';

export const SigninFields: { name: keyof Signin; type?: string }[] = [
  { name: 'email' },
  { name: 'password', type: 'password' },
];
