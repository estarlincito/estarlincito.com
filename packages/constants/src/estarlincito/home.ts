import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description: '',
  links: [
    {
      label: 'Web projects!',
      route: 'https://github.com/estarlincito',
      target: '_blank',
    },

    {
      label: 'Hire me!',
      route: '/contact',
      target: '_self',
    },
  ],

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
