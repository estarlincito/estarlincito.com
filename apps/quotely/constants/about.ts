import { locale, siteName, url } from 'quotely/settings';

export const ABOUT_TITLE = 'About';
export const ABOUT_ROUTE = '/about';
export const ABOUT_DESCRIPTION = 'A collection of quotes sourced from Quotely.';

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
    'Whether you need a spark of motivation, a moment of clarity, or a fresh perspective—these quotes are here to resonate, reflect, and recharge your day.',
  header: {
    summary:
      'Welcome to a space where words matter—deeply, beautifully, and powerfully.',
    title: ABOUT_TITLE,
  },
  overview: {
    mission:
      "Our mission is to curate and share timeless quotes that inspire reflection, ignite motivation, and celebrate the power of thought. Whether you're seeking clarity, encouragement, or a moment of stillness, we’re here to offer the right words at the right time.",
    title: 'Mission',
  },
  topics: {
    items: [
      {
        label: 'Motivation',
        value:
          'Push through challenges and stay driven with quotes that energize and encourage.',
      },
      {
        label: 'Life',
        value:
          'Reflect on the everyday and the extraordinary with quotes about living meaningfully.',
      },
      {
        label: 'Success',
        value:
          'Explore insights from great minds on achievement, perseverance, and growth.',
      },
    ],
    title: 'Topics Coverage',
  },
};
