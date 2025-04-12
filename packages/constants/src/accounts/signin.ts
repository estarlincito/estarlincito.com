import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description: 'Use your Estarlincito Account',
  path: '/signin',
  title: 'Sign in',
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

export const signin = ObjectUtils.freeze({ ...constants, metadata });
