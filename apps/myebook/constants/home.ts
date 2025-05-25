import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'myebook/settings';

export const HOME_TITLE = siteName;
export const HOME_DESCRIPTION =
  "MyEbook is an online bookstore offering a diverse collection of digital books across multiple genres. Whether you're passionate about fiction, non-fiction, self-improvement, technology, or academic studies, MyEbook provides a curated selection of eBooks in PDF and EPUB formats to suit all interests.";
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
  HEADER: { summary: HOME_DESCRIPTION, title: HOME_TITLE },
} as const;
