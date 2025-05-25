import { type MDXOptions } from 'contentlayer/core';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';

export const mdxOptions: MDXOptions = {
  rehypePlugins: [],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  remarkPlugins: [remarkGfm, remarkEmoji],
};
