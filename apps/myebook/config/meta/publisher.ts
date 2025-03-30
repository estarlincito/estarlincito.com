import Meta from './meta';

new Meta({
  description: '',
  images: [{ alt: '', url: '' }],
  title: '',
});

//Inset the new Meta over there
const meta_publisher = new Meta({
  description: '',
  images: [{ alt: '', url: '' }],
  title: '',
}).meta;

export default meta_publisher;
