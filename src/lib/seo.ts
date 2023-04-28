import { Description } from '@/types';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export class SEO {
  constructor(
    public seo: {
      title: string;
      description: Description;
      openGraph: OpenGraph;
      imagesUrl: string;
      imagesAlt: string;
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
    openGraph: {
      ...this.seo.openGraph,
      title: this.seo.title,
      description: this.seo.description,
      images: {
        url: this.seo.imagesUrl,
        width: 800,
        height: 600,
        alt: this.seo.imagesAlt,
      },
      siteName: 'estarlincito',
      locale: 'es-US',
    },
  } as Metadata;
}
