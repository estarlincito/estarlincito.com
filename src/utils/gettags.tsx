import { allBlogs } from 'contentlayer/generated';

export const getTags = () => {
  //to concat all tags array
  const _tags = allBlogs.flatMap((item) => item.tags);

  //to count all tags
  const count: { [key: string]: number } = {};
  _tags.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });

  //to order all tags on {}[]
  const tags: { tag: string; count: number }[] = [];
  for (const key in count) {
    tags.push({ tag: key, count: count[key] });
  }

  return { tags };
};
