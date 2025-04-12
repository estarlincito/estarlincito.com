import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
import { addingKey } from '@repo/lib';

import * as budget from '../../budget/index.js';
import * as carly from '../../carly/index.js';
import { about as estarlincito } from '../../estarlincito/about.js';
import * as imwriting from '../../imwriting/index.js';
import * as quotely from '../../quotely/index.js';
import { overviewSchema, type OverviewTypes } from '../../schema/overview.js';
import { locale, siteName, url } from '../settings.js';

const constants = ObjectUtils.create({
  description:
    'A showcase of personal and collaborative projects focused on web development, open source, and creative problem-solving.',
  overview: overviewSchema.parse({
    bio: estarlincito.overview.bio,
    closing: '',
    greeting: '',
    mission: '',
    topics: addingKey([
      {
        label: quotely.siteName,
        value: quotely.about.description,
      },
      {
        label: budget.siteName,
        value: budget.about.description,
      },
      {
        label: carly.siteName,
        value: carly.about.description,
      },
      {
        label: imwriting.siteName,
        value: imwriting.about.description,
      },
    ]),
  } satisfies OverviewTypes),
  path: '/projects',
  title: 'Projects',
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
