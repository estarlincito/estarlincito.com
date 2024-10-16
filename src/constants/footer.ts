import Links from '@/types/links';
import { allBlogs } from 'contentlayer/generated';

const hireme: Links[] = [
  { route: 'https://linktr.ee/estarlincito', label: 'Linktr' },
  { route: 'https://x.com/est4rlin_', label: 'Twitter' },
  { route: 'https://www.linkedin.com/in/estarlincito', label: 'Linkedin' },
];

const allCat = Object.entries(
  allBlogs.reduce((cat: { [key: string]: string }, item) => {
    cat[item.urls.cat] = item.category;
    return cat;
  }, {})
);

const catsLinks: Links[] = allCat.map(([route, label]) => ({
  route,
  label,
}));

export default class Footer {
  static readonly hireme = hireme;
  static readonly catsLinks = catsLinks;
}
