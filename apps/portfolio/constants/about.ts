import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'portfolio/settings';

export const ABOUT_TITLE = 'About';
export const ABOUT_ROUTE = '/about';
export const ABOUT_DESCRIPTION =
  'A portfolio of thoughtful web experiences, built with care and clean code.';

export const METADATA: Metadata.Website = {
  description: ABOUT_DESCRIPTION,
  images: [
    {
      alt: 'Avatar',
      url: '/assets/avatar.jpeg',
    },
  ],
  locale,
  siteName,
  title: ABOUT_TITLE,
  url: url + ABOUT_ROUTE,
} as const;

import type { Sections } from '@repo/types';

export const SECTIONS: Sections = {
  footer: '',
  header: {
    summary: 'Hello!',
    title: ABOUT_TITLE,
  },
  overview: {
    mission: '',
    title: 'Mission',
  },
  topics: {
    items: [
      {
        label: 'Web Development Projects',
        value:
          'Highlighted projects like ImWriting, Carly, and Quotely, demonstrating expertise in creating minimalist writing environments, intelligent chat experiences, and curated quote collections.',
      },
      {
        label: 'Technical Skills & Competencies',
        value:
          'Emphasized proficiency in HTML5, CSS3, JavaScript, React, Next.js, Node.js, and other technologies. Also showcased abilities in troubleshooting, cybersecurity awareness, critical thinking, and organizational skills.',
      },
      {
        label: 'Educational Background',
        value:
          'Detailed courses completed in Advanced Computer Science, Ethical Hacking, Responsive Web Design, and JavaScript Algorithms and Data Structures.',
      },
      {
        label: 'Personal Philosophy',
        value:
          'Shared a passion for technology as an adventure, reflecting a proactive and self-motivated approach to challenges and continuous learning.',
      },
    ],
    title: 'Topics Coverage',
  },
};
