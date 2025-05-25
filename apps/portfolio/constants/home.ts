import { ABOUT_DESCRIPTION as BUDGET_ABOUT_DESCRIPTION } from '@app/budget/constants/about';
import { ABOUT_DESCRIPTION as CARLY_ABOUT_DESCRIPTION } from '@app/carly/constants/about';
import { ABOUT_DESCRIPTION as ESTARLINCITO_ABOUT_DESCRIPTION } from '@app/estarlincito/constants/about';
import { HOME_TITLE as ESTARLINCITO_HOME_TITLE } from '@app/estarlincito/constants/home';
import { ABOUT_DESCRIPTION as IMWRITING_ABOUT_DESCRIPTION } from '@app/imwriting/constants/about';
import { ABOUT_DESCRIPTION as QUOTELY_ABOUT_DESCRIPTION } from '@app/quotely/constants/about';
import type { Metadata } from '@estarlincito/utils';
import { siteName as budgetSiteName, url as budgetUrl } from 'budget/settings';
import { siteName as carlySiteName, url as carlyUrl } from 'carly/settings';
import { url as estarlincitoUrl } from 'estarlincito/settings';
import {
  siteName as imwritingSiteName,
  url as imwritingUrl,
} from 'imwriting/settings';
import { locale, siteName, url } from 'portfolio/settings';
import {
  siteName as quotelySiteName,
  url as quotelyUrl,
} from 'quotely/settings';

export const HOME_TITLE = siteName;
export const HOME_DESCRIPTION = '';
export const HOME_ROUTE = '/';

export const METADATA: Metadata.Website = {
  description: HOME_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: HOME_TITLE,
  url: url + HOME_ROUTE,
};

export const SECTIONS = {
  BIO: 'I’m [**Estarlin R**](https://estarlincito.com) a **Web Designer** and **IT Support specialist** with a passion for software development.\n\nI create modern, user-friendly websites optimized for all devices. With expertise in **HTML5**, **CSS3**, **JavaScript**, and frameworks like **React** and **Next.js**, I’ve built successful projects for clients worldwide and am always ready for new challenges.\n\n> _For me, technology is more than just a skill—it’s an adventure. Life is either a bold journey or nothing at all._',
  COMPETENCIES: {
    title: 'Key Competencies',
  },

  EDUCATION: {
    items: [
      {
        summary:
          'Programming, web development, computer systems, database management.',
        title: 'Advanced Computer Science Course',
      },

      { summary: 'Cybersecurity', title: 'Ethical Hacking Course' },

      {
        summary:
          'Responsive Web Design, flexible layouts, media queries, mobile-first design, adaptive images.',
        title: 'Responsive Web Design',
      },

      {
        summary: 'JavaScript Algorithms and Data Structures',
        title: 'JavaScript Course',
      },
    ],
    title: 'Education',
  },

  PROFESSIONAL: {
    items: [
      {
        company: 'Altice',
        date: ' May 2023 - Agu 2024',
        summary:
          'I provided exceptional customer service, efficiently resolving customer inquiries and complaints. I also assisted with order processing, account management, and troubleshooting technical issues.',
        title: 'Technical Support Representative',
      },
    ],
    title: 'Professional experience',
  },

  PROJECTS: {
    items: [
      {
        cover: '/assets/projects/estarlincito/cover.png',
        route: estarlincitoUrl,
        summary: ESTARLINCITO_ABOUT_DESCRIPTION,
        title: ESTARLINCITO_HOME_TITLE,
      },

      {
        cover: '/assets/projects/quotely/cover.png',
        route: quotelyUrl,
        summary: QUOTELY_ABOUT_DESCRIPTION,
        title: quotelySiteName,
      },
      {
        cover: '/assets/projects/budget/cover.png',
        route: budgetUrl,
        summary: BUDGET_ABOUT_DESCRIPTION,
        title: budgetSiteName,
      },
      {
        cover: '/assets/projects/carly/cover.png',
        route: carlyUrl,
        summary: CARLY_ABOUT_DESCRIPTION,
        title: carlySiteName,
      },
      {
        cover: '/assets/projects/imwriting/cover.png',
        route: imwritingUrl,
        summary: IMWRITING_ABOUT_DESCRIPTION,
        title: imwritingSiteName,
      },
    ],
    title: 'Web Projects',
  },

  SKILLS: {
    title: 'Skills',
  },
} as const;
