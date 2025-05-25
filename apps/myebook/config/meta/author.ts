/* eslint-disable no-restricted-imports */
import { Meta } from './meta';

new Meta({
  description: '',
  images: [{ alt: '', url: '' }],
  title: '',
});

// Inset the new Meta over there
export const meta_author = new Meta({
  description: '',
  images: [{ alt: '', url: '' }],
  title: '',
}).meta;
