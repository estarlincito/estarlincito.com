import { allBlogs } from 'contentlayer/generated';

export const Post = (
  slug: string,
  key: 'CATEGORY' | 'SUBCATEGORY' | 'POST'
) => {
  switch (key) {
    case 'CATEGORY':
      return allBlogs.filter(
        (item) => item.slug_category === `/blog/${decodeURI(slug)}`
      );

    case 'SUBCATEGORY':
      return allBlogs.filter(
        (item) => item.slug_subcategory === `/blog/${decodeURI(slug)}`
      );

    case 'POST':
      return allBlogs.filter(
        (item) => item.slug_post === `/blog/${decodeURI(slug)}`
      );
    default:
      return [];
  }
};
