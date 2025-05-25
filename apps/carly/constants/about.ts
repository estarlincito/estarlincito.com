import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'carly/settings';

export const ABOUT_TITLE = 'About';
export const ABOUT_ROUTE = '/about';
export const ABOUT_DESCRIPTION =
  'Carly provides intelligent and interactive chat experiences, making conversations more fluid and natural.';

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
  footer:
    'Carly is designed to adapt and evolve with every interaction, offering users a seamless, human-like communication experience.',
  header: {
    summary: 'Hi, I’m Carly—your smart, friendly conversation partner.',
    title: ABOUT_TITLE,
  },
  overview: {
    mission:
      'Carly’s mission is to redefine how humans interact with machines. By combining natural language understanding with responsive, real-time communication, Carly creates experiences that feel intuitive, personal, and genuinely helpful—one conversation at a time.',
    title: 'Mission',
  },
  topics: {
    items: [
      {
        label: 'AI Chat',
        value:
          'Harnessing artificial intelligence to facilitate smart, context-aware conversations in real time.',
      },
      {
        label: 'Conversational AI',
        value:
          'Enabling fluid dialogues that go beyond simple queries, using intent recognition and machine learning.',
      },
      {
        label: 'Real-time Messaging',
        value:
          'Delivering instant, reliable communication that feels responsive and human—on any platform.',
      },
    ],
    title: 'Topics Coverage',
  },
};
