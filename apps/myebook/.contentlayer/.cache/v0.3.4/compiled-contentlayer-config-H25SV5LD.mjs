// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";

// config/ebooks.ts
import { defineDocumentType } from "contentlayer/source-files";

// config/computedFields.ts
var computedFields = {
  // meta: {
  //   resolve: (doc) => {
  //     const { authors, genres, ebook, publisher } = meta(doc);
  //     return {
  //       authors,
  //       ebook,
  //       genres,
  //       publisher,
  //     };
  //   },
  //   type: meta_types as 'string',
  // },
};

// config/ebooks.ts
var fields = {
  authors: { of: { type: "string" }, required: true, type: "list" },
  cover: { required: true, type: "string" },
  coverAlt: { required: true, type: "string" },
  genres: { of: { type: "string" }, required: true, type: "list" },
  isbn: { required: true, type: "string" },
  language: { required: true, type: "string" },
  length: { required: true, type: "number" },
  publisher: { required: true, type: "string" },
  released: { required: true, type: "date" },
  size: { required: true, type: "number" },
  summary: { required: true, type: "string" },
  tags: { of: { type: "string" }, required: true, type: "list" },
  title: { required: true, type: "string" }
};
var Ebooks = defineDocumentType(() => ({
  computedFields,
  contentType: "mdx",
  fields,
  filePathPattern: "**.mdx",
  name: "Ebooks"
}));
var ebooks_default = Ebooks;

// config/mdxOptions.ts
import remarkGfm from "remark-gfm";
var mdxOptions = {
  rehypePlugins: [],
  remarkPlugins: [remarkGfm]
};
var mdxOptions_default = mdxOptions;

// contentlayer.config.ts
var contentLayerConfig = makeSource({
  contentDirPath: "./public/ebooks",
  documentTypes: [ebooks_default],
  mdx: mdxOptions_default
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-H25SV5LD.mjs.map
