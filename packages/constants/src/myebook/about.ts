import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
import { addingKey } from '@repo/lib';

import { about as estarlincito } from '../estarlincito/about.js';
import { overviewSchema, type OverviewTypes } from '../schema/overview.js';
import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    'A digital bookstore with a wide selection of eBooks across various genres, available in PDF and EPUB formats.',
  overview: overviewSchema.parse({
    bio: estarlincito.overview.bio,
    closing:
      'Whether you’re a student, a tech enthusiast, or simply love a good story, our collection is designed to inspire and inform. Discover your next read today.',
    greeting:
      'Welcome to your go-to destination for digital reading—where knowledge meets convenience.',
    mission:
      'Our mission is to make quality eBooks accessible to everyone. From academic resources to captivating fiction, we aim to provide a diverse and thoughtfully curated library that empowers learning, sparks curiosity, and fuels imagination—anytime, anywhere.',
    topics: addingKey([
      {
        label: 'Academic Studies',
        value:
          'Textbooks, research materials, and scholarly works to support your academic journey.',
      },
      {
        label: 'Technology',
        value:
          'Stay updated with the latest in programming, cybersecurity, AI, and more.',
      },
      {
        label: 'Self-improvement',
        value:
          'Books focused on personal growth, productivity, mindfulness, and career development.',
      },
      {
        label: 'Non-fiction',
        value:
          'Dive into real-world stories, biographies, historical accounts, and thought-provoking essays.',
      },
      {
        label: 'Fiction',
        value:
          'From contemporary novels to classic literature, explore compelling narratives across genres.',
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
