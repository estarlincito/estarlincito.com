import { type MDXOptions } from 'contentlayer/core';
import remarkGfm from 'remark-gfm';

export const mdxOptions: MDXOptions = {
  rehypePlugins: [],
  remarkPlugins: [remarkGfm],
};
