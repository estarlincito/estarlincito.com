import { makeSource } from 'contentlayer/source-files';

import Ebooks from './config/ebooks';
import mdxOptions from './config/mdxOptions';

const contentLayerConfig = makeSource({
  contentDirPath: './public/ebooks',
  documentTypes: [Ebooks],
  mdx: mdxOptions,
});

export default contentLayerConfig;
