import { about, articles, home } from './index.js';

const page = (label: string, route: string) => ({ label, route });

export const siteMap = [
  page(home.title, home.path),
  page(about.title, about.path),
  page(articles.title, articles.path),
];
