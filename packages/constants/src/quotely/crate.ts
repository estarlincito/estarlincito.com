import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description: 'Create a new quote',
  path: '/create',
  title: 'create',
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

export const create = ObjectUtils.freeze({ metadata, ...constants });
