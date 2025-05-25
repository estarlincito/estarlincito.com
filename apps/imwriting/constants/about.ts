import { locale, siteName, url } from 'imwriting/settings';

export const ABOUT_TITLE = 'About';
export const ABOUT_ROUTE = '/about';
export const ABOUT_DESCRIPTION =
  'A minimalist writing environment that enhances productivity and creativity.';

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
    'Whether you’re here for insights on coding, reflections on the human mind, or just to explore new ideas, I hope you find something that resonates.',
  header: {
    summary:
      'Hi there! Welcome to ImWriting, a space where curiosity meets creativity!',
    title: ABOUT_TITLE,
  },
  overview: {
    mission:
      'Through this blog, I share my thoughts, reflections, and analyses on topics that fuel my curiosity. From how technology shapes our minds to philosophical musings on human connection, this is a place for meaningful discussions and deep dives into ideas that matter.',
    title: 'Mission',
  },
  topics: {
    items: [
      {
        label: 'Psychology',
        value: 'From motivation to emotional well-being',
      },
      {
        label: 'Philosophy',
        value: 'Exploring ethics, the mind, and our digital age',
      },
      {
        label: 'Technology',
        value: 'Trends, innovations, and online privacy',
      },
      {
        label: 'Web Development',
        value: 'Insights on React, Next.js, and SEO',
      },
      {
        label: 'Creative Design',
        value: 'Marrying aesthetics with functionality',
      },
    ],
    title: 'Topics Coverage',
  },
};
