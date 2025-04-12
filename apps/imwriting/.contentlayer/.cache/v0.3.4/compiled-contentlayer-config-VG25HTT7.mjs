// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";

// config/articles.ts
import { defineDocumentType } from "contentlayer/source-files";

// config/computedFields.ts
import { num as num2 } from "@estarlincito/utils";
import readingTime from "reading-time";

// config/meta.ts
import {
  GenerateMetadata,
  handleError,
  num,
  toSlug
} from "@estarlincito/utils";
import { imwriting } from "@repo/constants";
import yaml from "yaml";
import { readFileSync } from "fs";
var { locale, siteName } = imwriting;
var getMeta = async (title) => {
  const categoriesData = readFileSync(
    `${process.cwd()}/config/categories.yaml`,
    "utf-8"
  );
  const data = yaml.parse(categoriesData).categories;
  const value = data.find((item) => item.title === title);
  if (value === void 0) {
    handleError("This properties not fount on descriptions");
  }
  return value;
};
var keyCounter = 0;
var meta = async (doc) => {
  const {
    authors,
    description,
    modifiedTime,
    publishedTime,
    title,
    cover,
    coverAlt,
    tags,
    _raw
  } = doc;
  const pathnames = {
    article: `/articles/${_raw.flattenedPath}`,
    category: `/articles/${toSlug(doc.category)}`,
    key: keyCounter += num("1"),
    subcategory: `/articles/${toSlug(doc.category)}/${toSlug(doc.subcategory)}`
  };
  const article = GenerateMetadata.article({
    authors: authors._array,
    description,
    images: [{ alt: coverAlt, url: cover }],
    locale,
    modifiedTime,
    publishedTime,
    section: doc.category,
    siteName,
    tags: tags._array,
    title,
    url: `${imwriting.url}${pathnames.article}`
  });
  const categoryMeta = await getMeta(doc.category);
  const category = GenerateMetadata.website({
    ...categoryMeta,
    locale,
    siteName,
    url: `${imwriting.url}${pathnames.category}`
  });
  const subCategoryMeta = await getMeta(doc.subcategory);
  const subcategory = GenerateMetadata.website({
    ...subCategoryMeta,
    locale,
    siteName,
    url: `${imwriting.url}${pathnames.subcategory}`
  });
  return { article, category, pathnames, subcategory };
};
var meta_default = meta;

// config/types/meta.ts
var base = `
title: string;
description: string;
metadataBase: string;
icon: {
  icon: string;
  shortcut: string;
}`;
var Image = `{
  url: string;
  alt: string;
  width: number;
  height: number;
}`;
var openGraph = `
  description: string;
  images: [${Image}, ...${Image}[]];
  locale: string;
  siteName: string;
  title: string;
  type: string;
  url: string;
`;
var Website = `
  openGraph: {${openGraph}};
  ${base};
`;
var Article = `{
  openGraph: {
  ${openGraph}
  section: string;
  publishedTime: string;
  modifiedTime: string;
  audio?: URL;
  tags: [string, ...string[]];
  authors: [string, ...string[]];
  };
  ${base};
}`;
var metaTypes = `{
  article: ${Article};
  category: {${Website}};
  subcategory: {${Website}};
  pathnames: {
    article: string;
    category: string;
    subcategory: string;
    key: number;
};
}`;
var meta_default2 = metaTypes;

// config/computedFields.ts
var displayed = (minutes) => {
  const round = Math.ceil(minutes);
  return round === num2("1") ? `${round} minute` : `${round} minutes`;
};
var computedFields = {
  meta: {
    resolve: async (doc) => meta_default(doc),
    type: meta_default2
  },
  readingTime: {
    resolve: (doc) => displayed(readingTime(doc.body.raw).minutes),
    type: "string"
  },
  wordCount: {
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    type: "number"
  }
};

// config/articles.ts
var fields = {
  authors: { of: { type: "string" }, required: true, type: "list" },
  avatar: { required: true, type: "string" },
  category: { required: true, type: "string" },
  check: {
    required: true,
    type: "boolean"
  },
  cover: { required: true, type: "string" },
  coverAlt: { required: true, type: "string" },
  description: { required: true, type: "string" },
  modifiedTime: { required: true, type: "date" },
  publishedTime: { required: true, type: "date" },
  subcategory: { required: true, type: "string" },
  tags: { of: { type: "string" }, required: true, type: "list" },
  title: { required: true, type: "string" }
};
var Articles = defineDocumentType(() => ({
  computedFields,
  contentType: "mdx",
  fields,
  filePathPattern: "**.mdx",
  name: "Articles"
}));
var articles_default = Articles;

// config/mdxOptions.ts
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
var mdxOptions = {
  rehypePlugins: [],
  remarkPlugins: [remarkGfm, remarkEmoji]
};
var mdxOptions_default = mdxOptions;

// contentlayer.config.ts
var contentLayerConfig = makeSource({
  contentDirExclude: ["drafts", "categories.yaml"],
  contentDirPath: "./public/articles",
  documentTypes: [articles_default],
  mdx: mdxOptions_default
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VG25HTT7.mjs.map
