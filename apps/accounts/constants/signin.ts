import { locale, siteName, url } from '@app/accounts/settings';

export const SIGNIN_TITLE = 'Sign in';
export const SIGNIN_ROUTE = '/signin';
export const SIGNIN_DESCRIPTION = 'Use your Estarlincito Account';
import type { Metadata } from '@estarlincito/utils';

export const METADATA: Metadata.Website = {
  description: SIGNIN_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: SIGNIN_TITLE,
  url: `${url}${SIGNIN_ROUTE}`,
};
