import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description: 'How can I make life easier for you today?',
  path: '/',
  title: siteName,
});

const metadata = GenerateMetadata.website({
  description: constants.description,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: siteName,
  url,
});

export const home = ObjectUtils.freeze({
  ...constants,
  metadata,
});
