import { locale, siteName, url } from 'estarlincito/settings';

export const ABOUT_TITLE = 'About';
export const ABOUT_ROUTE = '/about';
import type { Sections } from '@repo/types';
export const ABOUT_DESCRIPTION =
  'A hub for web development, IT solutions, and personal projects by Estarlin R.';

import type { Metadata } from '@estarlincito/utils';
export const METADATA: Metadata.Website = {
  description: ABOUT_DESCRIPTION,
  images: [
    {
      alt: 'Avatar',
      url: '/assets/avatar.jpeg',
    },
  ],

  locale,
  siteName,
  title: ABOUT_TITLE,
  url: url + ABOUT_ROUTE,
} as const;

export const SECTIONS: Sections = {
  footer:
    'From client work to open source, this is where code meets creativity. Explore a collection of experiences shaped by curiosity, learning, and real-world solutions.',
  header: {
    summary:
      'Welcome to Estarlincito — a hub for web development, IT solutions, and personal projects by Estarlin R.',
    title: ABOUT_TITLE,
  },
  overview: {
    mission:
      'To bridge design and functionality through clean code, creative problem-solving, and reliable IT solutions. Whether it’s crafting intuitive user experiences or supporting digital infrastructures, my goal is to make technology work beautifully—for everyone.',
    title: 'Mission',
  },

  topics: {
    items: [
      {
        label: 'Web Development',
        value:
          'Building responsive, accessible, and high-performance web applications using modern frameworks.',
      },
      {
        label: 'IT Support',
        value:
          'Providing practical tech solutions—from troubleshooting to infrastructure setup—for individuals and businesses.',
      },
      {
        label: 'Open Source Projects',
        value:
          'Contributing to and maintaining open-source tools that solve real problems and foster collaboration.',
      },
      {
        label: 'Freelancing',
        value:
          'Sharing insights and lessons from working independently, managing clients, and delivering results.',
      },
    ],
    title: 'Topics Coverage',
  },
};
