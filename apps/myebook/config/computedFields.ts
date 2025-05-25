/* eslint-disable no-restricted-imports */
import { type ComputedFields } from 'contentlayer/source-files';

import { meta } from './meta';
import { metaTypes } from './types/meta';

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
    type: metaTypes as 'string',
  },
};
