import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'myebook/settings';

export const EBOOKS_TITLE = 'eBooks';
export const EBOOKS_ROUTE = '/ebooks';
export const EBOOKS_DESCRIPTION = '';

export const METADATA: Metadata.Website = {
  description: EBOOKS_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: EBOOKS_TITLE,
  url: url + EBOOKS_ROUTE,
};

export const SECTIONS = {
  HEADER: { summary: EBOOKS_DESCRIPTION, title: EBOOKS_TITLE },
} as const;
