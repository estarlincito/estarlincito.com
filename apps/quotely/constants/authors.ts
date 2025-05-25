import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'quotely/settings';

export const AUTHORS_TITLE = 'Authors';
export const AUTHORS_ROUTE = '/authors';
export const AUTHORS_DESCRIPTION = '';

export const METADATA: Metadata.Website = {
  description: AUTHORS_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: AUTHORS_TITLE,
  url: url + AUTHORS_ROUTE,
};

export const SECTIONS = {
  HEADER: {
    summary: AUTHORS_DESCRIPTION,
    title: AUTHORS_TITLE,
  },
};
