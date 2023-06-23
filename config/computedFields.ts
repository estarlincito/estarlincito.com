import { ComputedFields } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import Words from '../src/lib/words';
import seo from './seo';
const { check, fix } = Words;

const prop = `{
  description: string;
  imagesUrl: string;
  imagesAlt: string;
};`;

export const Blogseo = `{
  cat: ${prop}
  sub: ${prop}
}`;

export const Urls = `{
  cat: string;
  sub: string;
  post: string;
}`;

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

  //URLS
  urls: {
    type: Urls as 'string',
    resolve: (doc) => {
      return {
        cat: fix(`/blog/${doc.category.toLocaleLowerCase()}`),
        sub: check(`/blog/${doc._raw.sourceFileDir}`),
        post: check(`/blog/${doc._raw.flattenedPath}`),
      };
    },
  },

  //BlogSEO
  blogseo: {
    type: Blogseo as 'string',
    resolve: (doc) => {
      return {
        cat: seo(doc.category),
        sub: seo(doc.subcategory),
      };
    },
  },
};
