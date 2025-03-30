import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    'Here you can find some awesome quotes to kickstart your day, good luck!',
  path: '/quotes',
  title: 'Quotes',
});

const { description, title, path } = constants;

const metadata = GenerateMetadata.website({
  description,
  images: [
    {
      alt: 'Experiment Progress Hand',
      url: 'https://cdn.pixabay.com/photo/2020/09/23/03/54/experiment-5594881_1280.jpg',
    },
  ],
  locale,
  siteName,
  title,
  url: `${url}${path}`,
});

export const quotes = ObjectUtils.freeze({ metadata, ...constants });
