import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import * as budget from '../../budget/settings.js';
import * as carly from '../../carly/settings.js';
import * as imwriting from '../../imwriting/settings.js';
import * as quotely from '../../quotely/settings.js';
import { locale, siteName, url } from '../settings.js';

const constants = ObjectUtils.create({
  description: '',
  path: '/projects',
  title: 'Projects',
  topics: {
    data: [
      quotely.siteName,
      budget.siteName,
      carly.siteName,
      imwriting.siteName,
    ],
    label: 'Projects',
  },
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

export const projects = ObjectUtils.freeze({ ...constants, metadata });
