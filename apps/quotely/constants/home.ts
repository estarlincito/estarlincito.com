import { AUTHORS_ROUTE } from '@app/quotely/constants/authors';
import { QUOTES_ROUTE } from '@app/quotely/constants/quotes';
import { TAGS_ROUTE } from '@app/quotely/constants/tags';
import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'quotely/settings';

export const HOME_TITLE = siteName;

export const HOME_DESCRIPTION =
  '✨ Quotely – Your daily dose of wisdom! 🔥 Get inspired with powerful quotes from legendary thinkers, authors & visionaries. 💡 Fuel your mind, spark conversations & stay motivated! 🚀';

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

export const SECTIONS = {
  AUTHORS: {
    cta: { label: 'View more authors', route: AUTHORS_ROUTE },
    title: 'Authors',
  },
  HEADER: {
    summary: HOME_DESCRIPTION,
    title: 'Welcome to Quotely!',
  },

  QUOTE_OF_THE_DAY: {
    cta: { label: 'View more quotes', route: QUOTES_ROUTE },
    title: 'Quote of the day',
  },

  TAGS: {
    cta: { label: 'View more tags', route: TAGS_ROUTE },
    title: 'Tags',
  },
};
