import { defineDocumentType } from 'contentlayer/source-files';
import { computedFields } from './computedFields';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '**.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    subcategory: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    updated: { type: 'date', required: true },
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
