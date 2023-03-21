import { allBlogs } from "contentlayer/generated";

type Post = {
  category: string;
  slug: string;
};

export const getPost = ({ category, slug }: Post) => {
  const post = allBlogs.find(
    (post) => post.slug === `/blog/${decodeURI(category)}/${decodeURI(slug)}`
  );
  return post;
};
