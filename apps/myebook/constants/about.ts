import { locale, siteName, url } from 'myebook/settings';

export const ABOUT_TITLE = 'About';
export const ABOUT_ROUTE = '/about';
export const ABOUT_DESCRIPTION =
  'A digital bookstore with a wide selection of eBooks across various genres, available in PDF and EPUB formats.';

import type { Metadata } from '@estarlincito/utils';
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
} as const;

import type { Sections } from '@repo/types';

export const SECTIONS: Sections = {
  footer:
    'Whether you’re a student, a tech enthusiast, or simply love a good story, our collection is designed to inspire and inform. Discover your next read today.',
  header: {
    summary:
      'Welcome to your go-to destination for digital reading—where knowledge meets convenience.',
    title: ABOUT_TITLE,
  },
  overview: {
    mission:
      'Our mission is to make quality eBooks accessible to everyone. From academic resources to captivating fiction, we aim to provide a diverse and thoughtfully curated library that empowers learning, sparks curiosity, and fuels imagination—anytime, anywhere.',
    title: 'Mission',
  },
  topics: {
    items: [
      {
        label: 'Academic Studies',
        value:
          'Textbooks, research materials, and scholarly works to support your academic journey.',
      },
      {
        label: 'Technology',
        value:
          'Stay updated with the latest in programming, cybersecurity, AI, and more.',
      },
      {
        label: 'Self-improvement',
        value:
          'Books focused on personal growth, productivity, mindfulness, and career development.',
      },
      {
        label: 'Non-fiction',
        value:
          'Dive into real-world stories, biographies, historical accounts, and thought-provoking essays.',
      },
      {
        label: 'Fiction',
        value:
          'From contemporary novels to classic literature, explore compelling narratives across genres.',
      },
    ],
    title: 'Topics Coverage',
  },
};
