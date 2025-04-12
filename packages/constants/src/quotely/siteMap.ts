import { addingKey, generateRoute } from '@repo/lib';

import { about, home, quotes } from './index.js';

export const siteMap = addingKey([
  generateRoute('Home', home.path),
  generateRoute(about.title, about.path),
  generateRoute(quotes.title, quotes.path),
]);
