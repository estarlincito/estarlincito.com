import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
import { addingKey } from '@repo/lib';

import { overviewSchema, type OverviewTypes } from '../schema/overview.js';
import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    'A hub for web development, IT solutions, and personal projects by Estarlin R.',
  overview: overviewSchema.parse({
    bio: 'I’m [**Estarlincito**](https://estarlincito.com) a **Web Designer** and **IT Support specialist** with a passion for software development.\n\nI create modern, user-friendly websites optimized for all devices. With expertise in **HTML5**, **CSS3**, **JavaScript**, and frameworks like **React** and **Next.js**, I’ve built successful projects for clients worldwide and am always ready for new challenges.\n\n> _For me, technology is more than just a skill—it’s an adventure. Life is either a bold journey or nothing at all._',

    closing:
      'From client work to open source, this is where code meets creativity. Explore a collection of experiences shaped by curiosity, learning, and real-world solutions.',
    greeting: 'Hello!',
    mission:
      'To bridge design and functionality through clean code, creative problem-solving, and reliable IT solutions. Whether it’s crafting intuitive user experiences or supporting digital infrastructures, my goal is to make technology work beautifully—for everyone.',
    topics: addingKey([
      {
        label: 'Web Development',
        value:
          'Building responsive, accessible, and high-performance web applications using modern frameworks.',
      },
      {
        label: 'IT Support',
        value:
          'Providing practical tech solutions—from troubleshooting to infrastructure setup—for individuals and businesses.',
      },
      {
        label: 'Open Source Projects',
        value:
          'Contributing to and maintaining open-source tools that solve real problems and foster collaboration.',
      },
      {
        label: 'Freelancing',
        value:
          'Sharing insights and lessons from working independently, managing clients, and delivering results.',
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
      alt: 'Avatar',
      url: '/assets/avatar.jpeg',
    },
  ],
  locale,
  siteName,
  title,
  url: `${url}${path}`,
});

export const about = ObjectUtils.freeze({ ...constants, metadata });
