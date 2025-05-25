import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'aniverse/settings';

export const HOME_TITLE = siteName;
export const HOME_DESCRIPTION = '';
export const HOME_ROUTE = '/';

export const METADATA: Metadata.Website = {
  description: HOME_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: HOME_TITLE,
  url: url + HOME_ROUTE,
};
