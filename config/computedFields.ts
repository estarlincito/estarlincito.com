import { ComputedFields } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import seo from './seo';
import Content from './types/categories';

const prop = `{
  description: string;
  image_url: string;
  image_alt: string;
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
  return round === 1 ? `${round} minute` : `${round} minutes`;
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
      const categories = {
        Technology: 'technology',
        Smartphone: 'smartphone',
        'Web Design': 'web-design',
        'Web Development': 'web-development',
        'Software Development': 'software-development',
        Psychology: 'psychology',
        'Critical Psychology': 'critical-psychology',
        'Positive Psychology': 'positive-psychology',
        'Personality Psychology': 'personality-psychology',
        'Current events and psychology': 'current-events-psychology',
        Philosophy: 'philosophy',
        'Philosophy of Religion': 'philosophy-religion',
        'Philosophy of Life and Spirituality': 'philosophy-life-spirituality',
        Finance: 'finance',
        'Personal Finance': 'personal-finance',
        Relationships: 'relationships',
        Couple: 'couple',
        Emotions: 'emotions',
        'Self-Esteem': 'self-esteem',
        Culture: 'culture',
        'Current Affairs and Psychology': 'current-affairs-psychology',
        'Stories and Reflections': 'stories-reflections',
        Wellness: 'wellness',
        Reflections: 'reflections',
      };

      const post = `/blog/${doc._raw.flattenedPath}`;

      const cat = `/blog/${categories[doc.category as Content]}`;

      const sub = `/blog/${categories[doc.category as Content]}/${
        categories[doc.subcategory as Content]
      }`;

      return {
        post,
        cat,
        sub,
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
