import { about, contact, home, projects } from './index.js';

const page = (label: string, route: string) => {
  return { label, route };
};

export const siteMap = [
  page('Home', home.path),
  page(about.title, about.path),
  page(contact.title, contact.path),
  page(projects.title, projects.path),
];
