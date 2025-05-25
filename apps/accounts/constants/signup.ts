import { locale, siteName, url } from '@app/accounts/settings';
import type { Metadata } from '@estarlincito/utils';

export const SIGNUP_TITLE = 'Sign up';
export const SIGNUP_ROUTE = '/signup';
export const SIGNUP_DESCRIPTION = 'Create a Estarlincito Account';

export const METADATA: Metadata.Website = {
  description: SIGNUP_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: SIGNUP_TITLE,
  url: `${url}${SIGNUP_ROUTE}`,
};
