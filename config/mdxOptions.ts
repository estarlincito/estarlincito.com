import { MDXOptions } from 'contentlayer/core';
import remarkGfm from 'remark-gfm';

const mdxOptions: MDXOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
};

export default mdxOptions;
