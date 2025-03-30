import { type MDXOptions } from 'contentlayer/core';
import remarkGfm from 'remark-gfm';

const mdxOptions: MDXOptions = {
  rehypePlugins: [],
  remarkPlugins: [remarkGfm],
};

export default mdxOptions;
