import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    'Here, you will dive into thought-provoking discussions on philosophy, psychology, web development, and technology. ImWriting is a space for exploring how innovation reshapes our thinking, emotions, and interactions with the world.💡✨',
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
