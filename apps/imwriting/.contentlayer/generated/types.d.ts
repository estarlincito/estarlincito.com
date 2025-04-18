// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Articles = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Articles'
  authors: string[]
  avatar: string
  category: string
  check: boolean
  cover: string
  coverAlt: string
  description: string
  modifiedTime: IsoDateTimeString
  publishedTime: IsoDateTimeString
  subcategory: string
  tags: string[]
  title: string
  /** MDX file body */
  body: MDX
  meta: {
  article: {
  openGraph: {
  
  description: string;
  images: [{
  url: string;
  alt: string;
  width: number;
  height: number;
}, ...{
  url: string;
  alt: string;
  width: number;
  height: number;
}[]];
  locale: string;
  siteName: string;
  title: string;
  type: string;
  url: string;

  section: string;
  publishedTime: string;
  modifiedTime: string;
  audio?: URL;
  tags: [string, ...string[]];
  authors: [string, ...string[]];
  };
  
title: string;
description: string;
metadataBase: string;
icon: {
  icon: string;
  shortcut: string;
};
};
  category: {
  openGraph: {
  description: string;
  images: [{
  url: string;
  alt: string;
  width: number;
  height: number;
}, ...{
  url: string;
  alt: string;
  width: number;
  height: number;
}[]];
  locale: string;
  siteName: string;
  title: string;
  type: string;
  url: string;
};
  
title: string;
description: string;
metadataBase: string;
icon: {
  icon: string;
  shortcut: string;
};
};
  subcategory: {
  openGraph: {
  description: string;
  images: [{
  url: string;
  alt: string;
  width: number;
  height: number;
}, ...{
  url: string;
  alt: string;
  width: number;
  height: number;
}[]];
  locale: string;
  siteName: string;
  title: string;
  type: string;
  url: string;
};
  
title: string;
description: string;
metadataBase: string;
icon: {
  icon: string;
  shortcut: string;
};
};
  pathnames: {
    article: string;
    category: string;
    subcategory: string;
    key: number;
};
}
  readingTime: string
  wordCount: number
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Articles
export type DocumentTypeNames = 'Articles'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allArticles: Articles[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Articles: Articles
}

export type NestedTypeMap = {

}

 