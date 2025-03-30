import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    'Exploring the intersections of philosophy, psychology, and technology through thoughtful writing.',
  path: '/articles',
  title: 'Articles',
});

const { description, title, path } = constants;

const metadata = GenerateMetadata.website({
  description,
  images: [
    {
      alt: 'A MacBook and a mug.',
      url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
  ],
  locale,
  siteName,
  title,
  url: `${url}${path}`,
});

export const articles = ObjectUtils.freeze({ metadata, ...constants });
