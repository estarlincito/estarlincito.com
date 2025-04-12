import {
  GenerateMetadata,
  handleError,
  num,
  toSlug,
} from '@estarlincito/utils';
import { imwriting } from '@repo/constants';
import type { LocalDocument } from 'contentlayer/source-files';
import yaml from 'yaml';
const { locale, siteName } = imwriting;

import { readFileSync } from 'fs';

import type Instances from './types/instances';

const getMeta = async (title: string) => {
  const categoriesData = readFileSync(
    `${process.cwd()}/config/categories.yaml`,
    'utf-8',
  );

  const data = yaml.parse(categoriesData).categories as Instances[];
  const value = data.find((item) => item.title === title);
  if (value === undefined) {
    handleError('This properties not fount on descriptions');
  }
  return value;
};
let keyCounter = 0;
const meta = async (doc: LocalDocument) => {
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
    key: (keyCounter += num('1')),
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
    url: `${imwriting.url}${pathnames.article}`,
  });
  // Creating category
  const categoryMeta = await getMeta(doc.category);
  const category = GenerateMetadata.website({
    ...categoryMeta,
    locale,
    siteName,
    url: `${imwriting.url}${pathnames.category}`,
  });
  // Creating subcategory
  const subCategoryMeta = await getMeta(doc.subcategory);
  const subcategory = GenerateMetadata.website({
    ...subCategoryMeta,
    locale,
    siteName,
    url: `${imwriting.url}${pathnames.subcategory}`,
  });

  return { article, category, pathnames, subcategory };
};

export default meta;
