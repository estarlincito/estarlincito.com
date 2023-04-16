import { makeSource } from 'contentlayer/source-files';
import { Resource, mdxOptions } from './config';

const contentLayerConfig = makeSource({
  contentDirPath: './public/posts',
  documentTypes: [Resource],
  mdx: mdxOptions,
});

export default contentLayerConfig;
