/* eslint-disable no-restricted-imports */
import {
  GenerateMetadata,
  isDev,
  throwAppError,
  toSlug,
} from '@estarlincito/utils';
import type { LocalDocument } from 'contentlayer/source-files';
import { readFileSync } from 'fs';
import yaml from 'yaml';

import type { Instances } from './types/instances';

const url = isDev
  ? 'http://localhost:3002'
  : 'https://imwriting.estarlincito.com';

const locale = 'en-US';
const siteName = 'ImWriting';

const getMeta = async (title: string) => {
  const categoriesData = readFileSync(
    `${process.cwd()}/config/categories.yaml`,
    'utf-8',
  );

  const data = yaml.parse(categoriesData).categories as Instances[];
  const value = data.find((item) => item.title === title);
  if (value === undefined) {
    throwAppError('This properties not fount on descriptions');
  }
  return value;
};
let keyCounter = 0;
export const meta = async (doc: LocalDocument) => {
  const {
    authors,
    description,
    modifiedTime,
    publishedTime,
    title,
    cover,
    coverAlt,
    tags,
    _raw,
  } = doc;

  // Creating pathnames
  const pathnames = {
    article: `/articles/${_raw.flattenedPath}`,
    category: `/articles/${toSlug(doc.category)}`,
    key: (keyCounter += 1),
    subcategory: `/articles/${toSlug(doc.category)}/${toSlug(doc.subcategory)}`,
  };
  // Creating article
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
    url: `${url}${pathnames.article}`,
  });
  // Creating category
  const categoryMeta = await getMeta(doc.category);
  const category = GenerateMetadata.website({
    ...categoryMeta,
    locale,
    siteName,
    url: `${url}${pathnames.category}`,
  });
  // Creating subcategory
  const subCategoryMeta = await getMeta(doc.subcategory);
  const subcategory = GenerateMetadata.website({
    ...subCategoryMeta,
    locale,
    siteName,
    url: `${url}${pathnames.subcategory}`,
  });

  return { article, category, pathnames, subcategory };
};
