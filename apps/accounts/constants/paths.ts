import { url } from '@app/accounts/settings';

export const ACCOUNTS_ROUTES = [
  { label: 'Sign in', route: `${url}/signin` },
  { label: 'Sign up', route: `${url}/signup` },
] as const;

export const SIGNIN_API = `${url}/api/signin`;
export const SIGNOUT_API = `${url}/api/signout`;
export const SIGNUP_API = `${url}/api/signup`;
