import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'estarlincito/settings';

export const HOME_TITLE = siteName;
export const HOME_DESCRIPTION =
  'A hub for web development, IT solutions, and personal projects by Estarlin R. Dive into thoughtful web experiences, clean code, and creative tools built to empower.';
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
  header: { summary: HOME_DESCRIPTION, title: 'Welcome to Estarlincito 👋' },
};
