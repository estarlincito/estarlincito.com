import { Blog } from 'contentlayer/generated';

export type Article = {
  article: Blog;
  counter?: number;
};
