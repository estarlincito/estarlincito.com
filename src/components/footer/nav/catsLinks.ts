import Links from '@/types/links';
import { allBlogs } from 'contentlayer/generated';

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

export default catsLinks;
