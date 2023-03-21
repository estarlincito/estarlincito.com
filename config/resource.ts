import {
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";
import readingTime from "reading-time";

//round time
const displayed = (minutes: number) => {
  const round = Math.ceil(minutes);
  return round === 1
    ? `${round} minuto de lectura`
    : `${round} minutos de lectura`;
};

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    category: { type: "string", required: true },
    author: {
      type: "nested",
      of: Author,
    },
    image: { type: "string", required: true },
  },
  computedFields: {
    readingTime: {
      type: "string",
      resolve: (doc) => displayed(readingTime(doc.body.raw).minutes),
    },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));
