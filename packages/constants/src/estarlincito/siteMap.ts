import { addingKey, generateRoute } from '@repo/lib';

import { about, home, projects } from './index.js';

export const siteMap = addingKey([
  generateRoute('Home', home.path),
  generateRoute(about.title, about.path),
  generateRoute(projects.title, projects.path),
]);
