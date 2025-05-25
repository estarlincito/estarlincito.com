// eslint-disable-next-line no-restricted-imports
import { Meta } from './meta';

new Meta({
  description: '',
  images: [{ alt: '', url: '' }],
  title: '',
});

// Inset the new Meta over there
export const metaPublisher = new Meta({
  description: '',
  images: [{ alt: '', url: '' }],
  title: '',
}).meta;
