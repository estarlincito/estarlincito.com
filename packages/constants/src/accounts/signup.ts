import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description: 'Create a Estarlincito Account',
  path: '/signup',
  title: 'Sign up',
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

export const signup = ObjectUtils.freeze({ ...constants, metadata });
