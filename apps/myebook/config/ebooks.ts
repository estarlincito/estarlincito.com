/* eslint-disable no-restricted-imports */
import { defineDocumentType, type FieldDefs } from 'contentlayer/source-files';

import { computedFields } from './computedFields';

const fields: FieldDefs = {
  authors: { of: { type: 'string' }, required: true, type: 'list' },
  cover: { required: true, type: 'string' },
  coverAlt: { required: true, type: 'string' },
  genres: { of: { type: 'string' }, required: true, type: 'list' },
  isbn: { required: true, type: 'string' },
  language: { required: true, type: 'string' },
  length: { required: true, type: 'number' },
  publisher: { required: true, type: 'string' },
  released: { required: true, type: 'date' },
  size: { required: true, type: 'number' },
  summary: { required: true, type: 'string' },
  tags: { of: { type: 'string' }, required: true, type: 'list' },
  title: { required: true, type: 'string' },
};

export const Ebooks = defineDocumentType(() => ({
  computedFields,
  contentType: 'mdx',
  fields,
  filePathPattern: '**.mdx',
  name: 'Ebooks',
}));
