import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  contents: [''],
  description:
    'A hub for web development, IT solutions, and personal projects by Estarlin R.',
  path: '/about',
  title: 'About',
  topics: {
    data: [
      'Web Development',
      'IT Support',
      'Open Source Projects',
      'Freelancing',
    ],
    label: 'Topics Covered',
  },
});

const { description, title, path } = constants;

const metadata = GenerateMetadata.website({
  description,
  images: [
    {
      alt: 'Avatar',
      url: '/assets/avatar.jpeg',
    },
  ],
  locale,
  siteName,
  title,
  url: `${url}${path}`,
});

export const about = ObjectUtils.freeze({ ...constants, metadata });
