import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'imwriting/settings';

export const ARTICLES_TITLE = 'Articles';
export const ARTICLES_ROUTE = '/articles';
export const ARTICLES_DESCRIPTION =
  'Exploring the intersections of philosophy, psychology, and technology through thoughtful writing.';

export const METADATA: Metadata.Website = {
  description: ARTICLES_DESCRIPTION,
  images: [
    {
      alt: 'A MacBook and a mug.',
      url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
  ],
  locale,
  siteName,
  title: ARTICLES_TITLE,
  url: url + ARTICLES_ROUTE,
};

export const SECTIONS = {
  HEADERS: { summary: ARTICLES_DESCRIPTION, title: ARTICLES_TITLE },
};
