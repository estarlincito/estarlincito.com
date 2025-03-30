import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    "MyEbook is an online bookstore offering a diverse collection of digital books across multiple genres. Whether you're passionate about fiction, non-fiction, self-improvement, technology, or academic studies, MyEbook provides a curated selection of eBooks in PDF and EPUB formats to suit all interests.",
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
