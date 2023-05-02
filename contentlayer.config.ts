import { makeSource } from 'contentlayer/source-files';
import { Blog, mdxOptions } from './config';

const contentLayerConfig = makeSource({
  contentDirPath: './public/posts',
  documentTypes: [Blog],
  mdx: mdxOptions,
});

export default contentLayerConfig;
