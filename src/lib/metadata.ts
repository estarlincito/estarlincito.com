import { MetadataPorps } from '@/types';
import { Metadata } from 'next';

export const setMetadata = ({
  title,
  description,
  appUrl,
  imageUrl,
  imageAlt,
  type,
  publishedTime,
  author,
}: MetadataPorps) => {
  const openGraph = {
    title,
    description,
    url: appUrl,
    images: {
      url: imageUrl,
      width: 800,
      height: 600,
      alt: imageAlt,
    },
  };

  if (type! && publishedTime! && author!) {
    return {
      title,
      description,
      openGraph: { ...openGraph, type, publishedTime, author },
    } as Metadata;
  }

  return { title, description, openGraph };
};
