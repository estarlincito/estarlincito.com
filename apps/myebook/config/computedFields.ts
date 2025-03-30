import { type ComputedFields } from 'contentlayer/source-files';

import meta from './meta';
import meta_types from './types/meta';

export const computedFields: ComputedFields = {
  meta: {
    resolve: (doc) => {
      const { authors, genres, ebook, publisher } = meta(doc);
      return {
        authors,
        ebook,
        genres,
        publisher,
      };
    },
    type: meta_types as 'string',
  },
};
