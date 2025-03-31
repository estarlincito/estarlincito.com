import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';

import { locale, siteName, url } from './settings.js';

const description =
  'A minimalist writing environment that enhances productivity and creativity.';

const constants = ObjectUtils.create({
  content: {
    closingMessage:
      'Let’s embark on this journey of thought, creativity, and innovation together.',
    introduction: {
      bio: description,
      greeting:
        'Hi there! Welcome to ImWriting, a space where curiosity meets creativity!',
      mission:
        'Through this blog, I share my thoughts, reflections, and analyses on topics that fuel my curiosity. From how technology shapes our minds to philosophical musings on human connection, this is a place for meaningful discussions and deep dives into ideas that matter.',
    },
    topics: {
      closingNote:
        'Whether you’re here for insights on coding, reflections on the human mind, or just to explore new ideas, I hope you find something that resonates.',
      description:
        'I write about a range of topics that intersect the worlds of thought and technology:',
      list: [
        {
          details: 'From motivation to emotional well-being',
          title: 'Psychology',
        },
        {
          details: 'Exploring ethics, the mind, and our digital age',
          title: 'Philosophy',
        },
        {
          details: 'Trends, innovations, and online privacy',
          title: 'Technology',
        },
        {
          details: 'Insights on React, Next.js, and SEO',
          title: 'Web Development',
        },
        {
          details: 'Marrying aesthetics with functionality',
          title: 'Creative Design',
        },
      ],
    },
  },
  description,

  path: '/about',
  title: 'About Me',
});

const { title, path } = constants;

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
  title,
  url: `${url}${path}`,
});

export const about = ObjectUtils.freeze({ ...constants, metadata });
