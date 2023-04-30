import { Links } from '@/types';
import { allBlogs } from 'contentlayer/generated';

//Blog Category links
const categorySet = new Set(allBlogs.map(({ category }) => category));

const _category = Array.from(categorySet);

export const category: Links[] = _category.map((category) => {
  return { route: `/blog/${category.toLowerCase()}`, label: category };
});
