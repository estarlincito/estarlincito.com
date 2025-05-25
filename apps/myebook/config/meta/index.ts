/* eslint-disable no-restricted-imports */
import { GenerateMetadata, type Metadata, toSlug } from '@estarlincito/utils';
import { type LocalDocument } from 'contentlayer/source-files';

import type { Instances } from '../types/instances';
import { metaAuthor } from './author';
import { metaGenres } from './genres';
import { metaPublisher } from './publisher';

const locale = 'en-US';
const siteName = 'MyEbook';

const getMeta = (title: string, data: Instances[]) => {
  const value = data.find((item) => item.title === title);
  if (value === undefined) {
    // eslint-disable-next-line safeguard/no-raw-error
    throw new Error('This properties not fount on descriptions');
  }

  return value;
};

export const meta = (doc: LocalDocument) => {
  // ebook
  const ebook = GenerateMetadata.book({
    authors: doc.authors._array,
    description: doc.summary,
    images: [{ alt: doc.coverAlt, url: doc.cover }],
    isbn: doc.isbn,
    locale,
    releaseDate: doc.released,
    siteName,
    tags: doc.tags._array,
    title: doc.title,
    url: `https://myebook.estarlincito.com/ebooks/${toSlug('doc')}`,
  });

  // publisher
  const publisher = GenerateMetadata.website({
    locale,
    siteName,
    url: `https://myebook.estarlincito.com/ebooks/${toSlug(doc.publisher)}`,
    ...getMeta(doc.publisher, metaPublisher),
  });

  // genres
  const genres: Metadata.Return.Website[] = doc.genres._array.map(
    (genre: string) =>
      GenerateMetadata.website({
        locale,
        siteName,
        url: `https://myebook.estarlincito.com/ebooks/${toSlug(genre)}`,
        ...getMeta(genre, metaGenres),
      }),
  );

  // authors
  const authors: Metadata.Return.Website[] = doc.authors._array.map(
    (author: string) =>
      GenerateMetadata.website({
        locale,
        siteName,
        url: `https://myebook.estarlincito.com/ebooks/${toSlug(author)}`,
        ...getMeta(author, metaAuthor),
      }),
  );

  return { authors, ebook, genres, publisher };
};
