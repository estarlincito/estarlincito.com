import { ComputedFields, defineDocumentType } from 'contentlayer/source-files';
import readingTime from 'reading-time';

//round time
const displayed = (minutes: number) => {
  const round = Math.ceil(minutes);
  return round === 1 ? `${round} minuto` : `${round} minutos`;
};

const computedFields: ComputedFields = {
  readingTime: {
    type: 'string',
    resolve: (doc) => displayed(readingTime(doc.body.raw).minutes),
  },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },

  slug_category: {
    type: 'string',
    resolve: (doc) => `/blog/${doc.category.toLocaleLowerCase()}`,
  },

  slug_subcategory: {
    type: 'string',
    resolve: (doc) => `/blog/${doc._raw.sourceFileDir}`,
  },

  slug_post: {
    type: 'string',
    resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
  },
};

export const Resource = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**.mdx',
  contentType: 'mdx',
  fields: {
    teme: { type: 'string', required: true },
    category: { type: 'string', required: true },
    subcategory: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    updated: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    author: { type: 'string', required: true },
    avathar: { type: 'string', required: true },
    cover: { type: 'string', required: true },
    coverAlt: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    check: {
      type: 'boolean',
      required: true,
    },
  },
  computedFields,
}));
