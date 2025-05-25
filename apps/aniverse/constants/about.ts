import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'aniverse/settings';

export const ABOUT_TITLE = 'About';
export const ABOUT_ROUTE = '/about';
export const ABOUT_DESCRIPTION = '';

export const METADATA: Metadata.Website = {
  description: ABOUT_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: ABOUT_TITLE,
  url: url + ABOUT_ROUTE,
};

import type { Sections } from '@repo/types';

export const SECTIONS: Sections = {
  footer: '',
  header: {
    summary: 'Welcome...',
    title: ABOUT_TITLE,
  },
  overview: {
    mission: '',
    title: 'Mission',
  },
  topics: {
    items: [
      {
        label: '',
        value: '',
      },
    ],
    title: 'Topics Coverage',
  },
};
