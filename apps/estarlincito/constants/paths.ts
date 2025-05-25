export const ESTARLINCITO_API = {};
import { ABOUT_ROUTE, ABOUT_TITLE } from '@app/estarlincito/constants/about';
import { siteName as budget } from 'budget/settings';
import { siteName as carly } from 'carly/settings';
import { siteName as imwriting } from 'imwriting/settings';
import { siteName as portfolio } from 'portfolio/settings';
import { siteName as quotely } from 'quotely/settings';

export const ESTARLINCITO_PROJECTS_ROUTES = [
  { label: portfolio, route: '/projects/portfolio' },
  { label: budget, route: '/projects/budget' },
  { label: imwriting, route: '/projects/imwriting' },
  { label: quotely, route: '/projects/quotely' },
  { label: carly, route: '/projects/carly' },
];

export const ESTARLINCITO_APPLICATION_ROUTES = [
  { label: 'Home', route: '/' },
  { label: ABOUT_TITLE, route: ABOUT_ROUTE },
  { label: 'Contact', route: '/contact' },
];
