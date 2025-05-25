import { ABOUT_DESCRIPTION as BUDGET_ABOUT_DESCRIPTION } from '@app/budget/constants/about';
import { ABOUT_DESCRIPTION as CARLY_ABOUT_DESCRIPTION } from '@app/carly/constants/about';
import { ABOUT_DESCRIPTION as IMWRITING_ABOUT_DESCRIPTION } from '@app/imwriting/constants/about';
import { ABOUT_DESCRIPTION as PORTFOLIO_ABOUT_DESCRIPTION } from '@app/portfolio/constants/about';
import { ABOUT_DESCRIPTION as QUOTELY_ABOUT_DESCRIPTION } from '@app/quotely/constants/about';
import type { Metadata } from '@estarlincito/utils';
import { siteName as budgetSiteName } from 'budget/settings';
import { siteName as carlySiteName } from 'carly/settings';
import { locale, siteName, url } from 'estarlincito/settings';
import { siteName as imwritingSiteName } from 'imwriting/settings';
import { siteName as portfolioSiteName } from 'portfolio/settings';
import { siteName as quotelySiteName } from 'quotely/settings';

export const SECTIONS = {
  footer: '',
  overview: {
    greeting: '',
    mission: '',
  },
  PROJECTS: {
    items: [
      {
        cover: '/assets/projects/portfolio/cover.png',
        route: '/projects/portfolio',
        summary: PORTFOLIO_ABOUT_DESCRIPTION,
        title: portfolioSiteName,
      },
      {
        cover: '/assets/projects/quotely/cover.png',
        route: '/projects/quotely',
        summary: QUOTELY_ABOUT_DESCRIPTION,
        title: quotelySiteName,
      },
      {
        cover: '/assets/projects/budget/cover.png',
        route: '/projects/budget',
        summary: BUDGET_ABOUT_DESCRIPTION,
        title: budgetSiteName,
      },
      {
        cover: '/assets/projects/carly/cover.png',
        route: '/projects/carly',
        summary: CARLY_ABOUT_DESCRIPTION,
        title: carlySiteName,
      },
      {
        cover: '/assets/projects/imwriting/cover.png',
        route: '/projects/imwriting',
        summary: IMWRITING_ABOUT_DESCRIPTION,
        title: imwritingSiteName,
      },
    ],
    title: 'Web Projects',
  },
} as const;

export const PROJECTS_TITLE = 'Projects';
export const PROJECTS_DESCRIPTION =
  'A showcase of personal and collaborative projects focused on web development, open source, and creative problem-solving.';
export const PROJECTS_ROUTE = '/projects';

export const METADATA: Metadata.Website = {
  description: PROJECTS_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: PROJECTS_TITLE,
  url: url + PROJECTS_ROUTE,
};
