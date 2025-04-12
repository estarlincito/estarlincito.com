import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
import { addingKey } from '@repo/lib';

import { about as estarlincito } from '../estarlincito/about.js';
import { overviewSchema, type OverviewTypes } from '../schema/overview.js';
import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    'Carly provides intelligent and interactive chat experiences, making conversations more fluid and natural.',
  overview: overviewSchema.parse({
    bio: estarlincito.overview.bio,

    closing:
      'Carly is designed to adapt and evolve with every interaction, offering users a seamless, human-like communication experience.',
    greeting: 'Hi, I’m Carly—your smart, friendly conversation partner.',
    mission:
      'Carly’s mission is to redefine how humans interact with machines. By combining natural language understanding with responsive, real-time communication, Carly creates experiences that feel intuitive, personal, and genuinely helpful—one conversation at a time.',
    topics: addingKey([
      {
        label: 'AI Chat',
        value:
          'Harnessing artificial intelligence to facilitate smart, context-aware conversations in real time.',
      },
      {
        label: 'Conversational AI',
        value:
          'Enabling fluid dialogues that go beyond simple queries, using intent recognition and machine learning.',
      },
      {
        label: 'Real-time Messaging',
        value:
          'Delivering instant, reliable communication that feels responsive and human—on any platform.',
      },
    ]),
  } satisfies OverviewTypes),
  path: '/about',
  title: 'About',
});

const { title, path, description } = constants;

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
