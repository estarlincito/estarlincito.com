import {
  apiFetch,
  GenerateMetadata,
  handleError,
  toSlug,
} from '@estarlincito/utils';
import { imwriting } from '@repo/constants';
import { LocalDocument } from 'contentlayer/source-files';
import yaml from 'yaml';
const { locale, siteName } = imwriting;

import Instances from './types/instances';

const getMeta = async (title: string) => {
  const res = await apiFetch({
    method: 'GET',
    url: `${imwriting.url}/articles/categories.yaml`,
  });

  const text = await res.text();

  const data = yaml.parse(text).categories as Instances[];
  const value = data.find((item) => item.title === title);
  if (value === undefined) {
    handleError('This properties not fount on descriptions');
  }
  return value;
};

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
  //Creating pathnames
  const pathnames = {
    article: `/articles/${_raw.flattenedPath}`,
    category: `/articles/${toSlug(doc.category)}`,
    subcategory: `/articles/${toSlug(doc.category)}/${toSlug(doc.subcategory)}`,
  };
  //Creating article
  const article = GenerateMetadata.article({
    authors,
    description,
    images: [{ alt: coverAlt, url: cover }],
    locale,
    modifiedTime,
    publishedTime,
    section: doc.category,
    siteName,
    tags,
    title,
    url: `${imwriting.url}${pathnames.article}`,
  });
  //Creating category
  const categoryMeta = await getMeta(doc.category);
  const category = GenerateMetadata.website({
    ...categoryMeta,
    locale,
    siteName,
    url: `${imwriting.url}${pathnames.category}`,
  });
  //Creating subcategory
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
