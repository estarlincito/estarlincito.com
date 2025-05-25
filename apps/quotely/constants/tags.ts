import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'quotely/settings';

export const TAGS_TITLE = 'Tags';
export const TAGS_ROUTE = '/tags';
export const TAGS_DESCRIPTION = '';

export const METADATA: Metadata.Website = {
  description: TAGS_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: TAGS_TITLE,
  url: url + TAGS_ROUTE,
};

export const SECTIONS = {
  HEADER: { summary: TAGS_DESCRIPTION, title: TAGS_TITLE },
};
