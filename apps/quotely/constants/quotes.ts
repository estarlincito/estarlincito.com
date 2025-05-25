import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'quotely/settings';

export const QUOTES_TITLE = 'Quotes';
export const QUOTES_ROUTE = '/quotes';
export const QUOTES_DESCRIPTION =
  'Here you can find some awesome quotes to kickstart your day, good luck!';

export const METADATA: Metadata.Website = {
  description: QUOTES_DESCRIPTION,
  images: [
    {
      alt: 'Experiment Progress Hand',
      url: 'https://cdn.pixabay.com/photo/2020/09/23/03/54/experiment-5594881_1280.jpg',
    },
  ],
  locale,
  siteName,
  title: '',
  url: url + QUOTES_ROUTE,
};

export const SECTIONS = {
  HEADER: {
    summary: QUOTES_DESCRIPTION,
    title: QUOTES_TITLE,
  },
};
