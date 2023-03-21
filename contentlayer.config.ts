import { makeSource } from "contentlayer/source-files";
import { Blog } from "./config";

const contentLayerConfig = makeSource({
  contentDirPath: "app/assets/articles",
  documentTypes: [Blog],
});

export default contentLayerConfig;
