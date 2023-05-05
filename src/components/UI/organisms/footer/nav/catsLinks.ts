import { Links } from '@/types';
import { allBlogs } from 'contentlayer/generated';

const allCat = Object.entries(
  allBlogs.reduce((cat: { [key: string]: string }, item) => {
    cat[item.urls.cat] = item.category;
    return cat;
  }, {})
);

export const catsLinks: Links[] = allCat.map(([route, label]) => ({
  route,
  label,
}));
