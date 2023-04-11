import { Blog } from 'contentlayer/generated';

export const sortByDate = (posts: Blog[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
  );
};
