import { allBlogs } from "contentlayer/generated";

export const getPostsCategory = (category: string) => {
  const posts = allBlogs.filter(
    (post) => post._raw.sourceFileDir === decodeURI(category)
  );
  return posts;
};
