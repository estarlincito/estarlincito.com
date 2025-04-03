import {
  GenerateMetadata,
  type GenerateMetadataTypes,
  toSlug,
} from '@estarlincito/utils';
import { myebook } from '@repo/constants';
import Instances from 'config/types/instances';
import { type LocalDocument } from 'contentlayer/source-files';

import meta_author from './author';
import meta_genres from './genres';
import meta_publisher from './publisher';
const { locale, siteName } = myebook;
const getMeta = (title: string, data: Instances[]) => {
  const value = data.find((item) => item.title === title);
  if (value === undefined) {
    // eslint-disable-next-line safeguard/no-raw-error
    throw new Error('This properties not fount on descriptions');
  }
  return value;
};

const meta = (doc: LocalDocument) => {
  //ebook
  const ebook = GenerateMetadata.book({
    authors: doc.authors,
    description: doc.summary,
    images: [{ alt: doc.coverAlt, url: doc.cover }],
    isbn: doc.isbn,
    locale: 'en-US',
    releaseDate: doc.released,
    siteName: 'MyEbook',
    tags: doc.tags,
    title: doc.title,
    url: `https://myebook.estarlincito.com/ebooks/${toSlug('doc')}`,
  });

  //publisher
  const publisher = GenerateMetadata.website({
    locale,
    siteName,
    url: `https://myebook.estarlincito.com/ebooks/${toSlug(doc.publisher)}`,
    ...getMeta(doc.publisher, meta_publisher),
  });

  //genres
  const genres: GenerateMetadataTypes['ReturnsWebsite'][] =
    doc.genres._array.map((genre: string) => {
      return GenerateMetadata.website({
        locale,
        siteName,
        url: `https://myebook.estarlincito.com/ebooks/${toSlug(genre)}`,
        ...getMeta(genre, meta_genres),
      });
    });

  //authors
  const authors: GenerateMetadataTypes['ReturnsWebsite'][] =
    doc.authors._array.map((author: string) => {
      return GenerateMetadata.website({
        locale,
        siteName,
        url: `https://myebook.estarlincito.com/ebooks/${toSlug(author)}`,
        ...getMeta(author, meta_author),
      });
    });

  return { authors, ebook, genres, publisher };
};

export default meta;
