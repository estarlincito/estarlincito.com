import { makeSource } from "contentlayer/source-files";
import { mdxOptions, Blog } from "./config";

const contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: mdxOptions,
});

export default contentLayerConfig;
