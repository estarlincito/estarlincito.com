import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  contents: [''],
  description: '',
  path: '/about',
  title: 'About',
  topics: {
    data: [''],
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
