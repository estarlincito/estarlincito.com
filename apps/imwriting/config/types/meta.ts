const base = `
title: string;
description: string;
metadataBase: string;
icon: {
  icon: string;
  shortcut: string;
}`;

const Image = `{
  url: string;
  alt: string;
  width: number;
  height: number;
}`;

const openGraph = `
  description: string;
  images: [${Image}, ...${Image}[]];
  locale: string;
  siteName: string;
  title: string;
  type: string;
  url: string;
`;

const Website = `
  openGraph: {${openGraph}};
  ${base};
`;

const Article = `{
  openGraph: {
  ${openGraph}
  section: string;
  publishedTime: string;
  modifiedTime: string;
  audio?: URL;
  tags: [string, ...string[]];
  authors: [string, ...string[]];
  };
  ${base};
}`;

const metaTypes = `{
  article: ${Article};
  category: {${Website}};
  subcategory: {${Website}};
  pathnames: {
    article: string;
    category: string;
    subcategory: string;
};
}`;

export default metaTypes;
