import { Blog } from 'contentlayer/generated';

export const sortByDate = (articles: Blog[]) => {
  return articles.sort(
    (a, b) =>
      new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
  );
};
