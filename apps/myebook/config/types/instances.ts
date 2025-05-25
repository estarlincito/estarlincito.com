import type { Metadata } from '@estarlincito/utils';

export interface Instances {
  title: string;
  description: string;
  images: [Metadata.Images, ...Metadata.Images[]];
}
