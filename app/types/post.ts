import { Blog } from "contentlayer/generated";

export type Post = {
  post: Blog;
  counter?: number;
};
