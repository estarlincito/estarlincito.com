import { makeSource } from 'contentlayer/source-files';

import Articles from './config/articles';
import mdxOptions from './config/mdxOptions';

const contentLayerConfig = makeSource({
  contentDirExclude: ['drafts', 'categories.yaml'],
  contentDirPath: './public/articles',
  documentTypes: [Articles],
  mdx: mdxOptions,
});

export default contentLayerConfig;
