import { makeSource } from 'contentlayer/source-files';
import { Resource, mdxOptions } from './config';

const contentLayerConfig = makeSource({
  contentDirPath: 'src/assets/posts',
  documentTypes: [Resource],
  mdx: mdxOptions,
});

export default contentLayerConfig;
