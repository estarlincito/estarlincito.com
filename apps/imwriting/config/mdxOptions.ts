import { type MDXOptions } from 'contentlayer/core';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';

const mdxOptions: MDXOptions = {
  rehypePlugins: [],
  remarkPlugins: [remarkGfm, remarkEmoji],
};

export default mdxOptions;
