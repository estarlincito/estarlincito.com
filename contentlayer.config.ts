import { makeSource } from "contentlayer/source-files";
import { Blog } from "./config";

const contentLayerConfig = makeSource({
  contentDirPath: "src/assets/articles",
  documentTypes: [Blog],
});

export default contentLayerConfig;
