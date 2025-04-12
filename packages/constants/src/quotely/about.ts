import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
import { addingKey } from '@repo/lib';

import { about as estarlincito } from '../estarlincito/about.js';
import { overviewSchema, type OverviewTypes } from '../schema/overview.js';
import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description: 'A collection of quotes sourced from Quotely.',
  overview: overviewSchema.parse({
    bio: estarlincito.overview.bio,
    closing:
      'Whether you need a spark of motivation, a moment of clarity, or a fresh perspective—these quotes are here to resonate, reflect, and recharge your day.',
    greeting:
      'Welcome to a space where words matter—deeply, beautifully, and powerfully.',
    mission:
      "Our mission is to curate and share timeless quotes that inspire reflection, ignite motivation, and celebrate the power of thought. Whether you're seeking clarity, encouragement, or a moment of stillness, we’re here to offer the right words at the right time.",

    topics: addingKey([
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
    ]),
  } satisfies OverviewTypes),
  path: '/about',
  title: 'About',
});

const { description, title, path } = constants;

const metadata = GenerateMetadata.website({
  description,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title,
  url: `${url}${path}`,
});

export const about = ObjectUtils.freeze({ ...constants, metadata });
