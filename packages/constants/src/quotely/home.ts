import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    '✨ Quotely – Your daily dose of wisdom! 🔥 Get inspired with powerful quotes from legendary thinkers, authors & visionaries. 💡 Fuel your mind, spark conversations & stay motivated! 🚀',
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
