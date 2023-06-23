import { Blog } from 'contentlayer/generated';

const sortByDate = (posts: Blog[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
  );
};

export default sortByDate;
