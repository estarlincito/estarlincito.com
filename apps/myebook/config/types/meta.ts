const base = `
    title: string;
    description: string;
    metadataBase: string;`;

const openGraph = `{
      type: string;
      siteName: string;
      locale: string;
      title: string;
      description: string;
      images: {
        width: number;
        height: number;
        url: string;
        alt: string;
      }[];
      url: string;
    };`;

const icons = `
    {
      icon: string;
      shortcut: string;
    };`;

const meta_types = `{
  authors: {
    ${base}
    openGraph: ${openGraph}
    icons: ${icons}
  }[];
  genres: {
    ${base}
    openGraph: ${openGraph}
    icons: ${icons}
  }[];
  publisher: {
    ${base}
    openGraph: ${openGraph}
    icons: ${icons}
  };
  ebook: {
  ${base}
  openGraph: {
    type: string;
    locale: string;
    siteName: string;
    authors: string[];
    releaseDate: string;
    tags: string[];
    description: string;
    title: string;
    images: {
      width: number;
      height: number;
      url: string;
      alt: string;
    }[];
    url: string;
  };
  icons: ${icons}
};
}`;

export default meta_types;
