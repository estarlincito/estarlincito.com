import { descriptions } from './seo';
import { ComputedFields } from 'contentlayer/source-files';
import readingTime from 'reading-time';

//round time
const displayed = (minutes: number) => {
  const round = Math.ceil(minutes);
  return round === 1 ? `${round} minuto` : `${round} minutos`;
};

export const computedFields: ComputedFields = {
  //readingTime
  readingTime: {
    type: 'string',
    resolve: (doc) => displayed(readingTime(doc.body.raw).minutes),
  },

  //wordCount
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },

  //slug_category
  slug_category: {
    type: 'string',
    resolve: (doc) => `/blog/${doc.category.toLocaleLowerCase()}`,
  },

  //slug_subcategory
  slug_subcategory: {
    type: 'string',
    resolve: (doc) => `/blog/${doc._raw.sourceFileDir}`,
  },

  //slug_post
  slug_post: {
    type: 'string',
    resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
  },

  //BlogSEO
  blogseo: {
    type: 'json',
    resolve: (doc) => {
      return {
        seoCategory: descriptions(doc.category),
        seoSubCategory: descriptions(doc.subcategory),
      };
    },
  },
};
