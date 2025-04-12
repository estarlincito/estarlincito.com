import { addingKey, generateRoute } from '@repo/lib';

import { about, articles, home } from './index.js';

export const siteMap = addingKey([
  generateRoute('Home', home.path),
  generateRoute(about.title, about.path),
  generateRoute(articles.title, articles.path),
]);
