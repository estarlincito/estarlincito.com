import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  contents: [''],
  description:
    'A digital bookstore with a wide selection of eBooks across various genres, available in PDF and EPUB formats.',
  path: '/about',
  title: 'About',
  topics: {
    data: [
      'Fiction',
      'Non-fiction',
      'Self-improvement',
      'Technology',
      'Academic Studies',
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
