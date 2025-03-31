import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  contents: [''],
  description:
    'Carly provides intelligent and interactive chat experiences, making conversations more fluid and natural.',
  path: '/about',
  title: 'About',
  topics: {
    data: ['AI Chat', 'Conversational AI', 'Real-time Messaging'],
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
