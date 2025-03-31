import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  contents: [''],
  description:
    'A structured approach to managing money, ensuring financial stability and goal achievement.',
  path: '/about',
  title: 'About',
  topics: {
    data: [
      'Personal Finance',
      'Expense Tracking',
      'Savings',
      'Financial Planning',
    ],
    label: 'Topics Covered',
  },
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
