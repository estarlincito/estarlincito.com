import { ebooks, home } from './index.js';

const page = (label: string, route: string) => ({ label, route });

export const siteMap = [
  page(home.title, home.path),
  page(ebooks.title, ebooks.path),
];
