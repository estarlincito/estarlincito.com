import { type ComputedFields } from 'contentlayer/source-files';
import readingTime from 'reading-time';

import meta from './meta';
import metaTypes from './types/meta';

const displayed = (minutes: number) => {
  const round = Math.ceil(minutes);
  return round === 1 ? `${round} minute` : `${round} minutes`;
};

export const computedFields: ComputedFields = {
  meta: {
    resolve: async (doc) => {
      return await meta(doc);
    },
    type: metaTypes as 'string',
  },

  readingTime: {
    resolve: (doc) => displayed(readingTime(doc.body.raw).minutes),
    type: 'string',
  },

  wordCount: {
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    type: 'number',
  },
};
