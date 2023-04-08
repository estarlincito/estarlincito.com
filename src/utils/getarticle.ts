import { allBlogs } from 'contentlayer/generated';

export const getArticle = (category: string, slug: string) => {
  return allBlogs.find(
    (item) => item.slug === `/blog/${decodeURI(category)}/${decodeURI(slug)}`
  );
};
