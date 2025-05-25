import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'quotely/settings';

export const CREATE_TITLE = 'Create';
export const CREATE_ROUTE = '/create';
export const CREATE_DESCRIPTION = 'Create a new quote';

export const METADATA: Metadata.Website = {
  description: CREATE_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: CREATE_TITLE,
  url: url + CREATE_ROUTE,
};
