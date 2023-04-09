import { allBlogs } from 'contentlayer/generated';

export const getArticlesCategory = (category: string) => {
  return allBlogs.filter(
    (item) => item._raw.sourceFileDir === decodeURI(category)
  );
};
