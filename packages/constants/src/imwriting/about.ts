import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
import { addingKey } from '@repo/lib';

import { about as estarlincito } from '../estarlincito/about.js';
import { overviewSchema, type OverviewTypes } from '../schema/overview.js';
import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    'A minimalist writing environment that enhances productivity and creativity.',

  overview: overviewSchema.parse({
    bio: estarlincito.overview.bio,
    closing:
      'Whether you’re here for insights on coding, reflections on the human mind, or just to explore new ideas, I hope you find something that resonates.',
    greeting:
      'Hi there! Welcome to ImWriting, a space where curiosity meets creativity!',
    mission:
      'Through this blog, I share my thoughts, reflections, and analyses on topics that fuel my curiosity. From how technology shapes our minds to philosophical musings on human connection, this is a place for meaningful discussions and deep dives into ideas that matter.',
    topics: addingKey([
      {
        label: 'Psychology',
        value: 'From motivation to emotional well-being',
      },
      {
        label: 'Philosophy',
        value: 'Exploring ethics, the mind, and our digital age',
      },
      {
        label: 'Technology',
        value: 'Trends, innovations, and online privacy',
      },
      {
        label: 'Web Development',
        value: 'Insights on React, Next.js, and SEO',
      },
      {
        label: 'Creative Design',
        value: 'Marrying aesthetics with functionality',
      },
    ]),
  } satisfies OverviewTypes),
  path: '/about',
  title: 'About',
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

export const about = ObjectUtils.freeze({ ...constants, metadata });
