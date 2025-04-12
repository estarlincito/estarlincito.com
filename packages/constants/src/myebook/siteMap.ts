import { addingKey, generateRoute } from '@repo/lib';

import { ebooks, home } from './index.js';

export const siteMap = addingKey([
  generateRoute('Home', home.path),
  generateRoute(ebooks.title, ebooks.path),
]);
