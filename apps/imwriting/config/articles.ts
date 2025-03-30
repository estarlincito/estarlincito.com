import { defineDocumentType, type FieldDefs } from 'contentlayer/source-files';

import { computedFields } from './computedFields';

const fields: FieldDefs = {
  authors: { of: { type: 'string' }, required: true, type: 'list' },
  avatar: { required: true, type: 'string' },
  category: { required: true, type: 'string' },
  check: {
    required: true,
    type: 'boolean',
  },
  cover: { required: true, type: 'string' },
  coverAlt: { required: true, type: 'string' },
  description: { required: true, type: 'string' },
  modifiedTime: { required: true, type: 'date' },
  publishedTime: { required: true, type: 'date' },
  subcategory: { required: true, type: 'string' },
  tags: { of: { type: 'string' }, required: true, type: 'list' },

  title: { required: true, type: 'string' },
};

const Articles = defineDocumentType(() => ({
  computedFields,
  contentType: 'mdx',
  fields,
  filePathPattern: '**.mdx',
  name: 'Articles',
}));

export default Articles;
