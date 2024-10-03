import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import isDev from './isDev';

class SEO {
  constructor(
    public seo: {
      title: string;
      description: string;
      openGraph: OpenGraph;
      image_url: string;
      image_alt: string;
    }
  ) {
    this.seo = seo;
  }

  metadata = {
    icons: {
      icon: 'https://estarlincito.com/favicons/favicon.ico',
      shortcut: 'https://estarlincito.com/favicons/shortcut-icon.png',
    },
    title: this.seo.title,
    description: this.seo.description,
    metadataBase: new URL(
      isDev === true ? 'http://localhost:3000' : 'https://estarlincito.com'
    ),
    openGraph: {
      ...this.seo.openGraph,
      title: this.seo.title,
      description: this.seo.description,

      images: {
        url: this.seo.image_url,
        width: 800,
        height: 600,
        alt: this.seo.image_alt,
      },
      siteName: 'estarlincito',
      locale: 'es-US',
    },
  } as Metadata;
}

export default SEO;
