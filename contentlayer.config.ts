import { makeSource } from 'contentlayer/source-files';
import Blog from './config/blog';
import mdxOptions from './config/mdxOptions';

const contentLayerConfig = makeSource({
  contentDirPath: './public/posts',
  documentTypes: [Blog],
  mdx: mdxOptions,
});

export default contentLayerConfig;
