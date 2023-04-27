import { Slug } from '@/types';
import { allBlogs } from 'contentlayer/generated';

export const Post = (slug: Slug, key: 'CATEGORY' | 'SUBCATEGORY' | 'POST') => {
  switch (key) {
    case 'CATEGORY': {
      const _slug = decodeURI(slug[0]);
      return allBlogs.filter((item) => item.slug_category === `/blog/${_slug}`);
    }

    case 'SUBCATEGORY': {
      const _slug = decodeURI(`${slug[0]}/${slug[1]}`);
      return allBlogs.filter(
        (item) => item.slug_subcategory === `/blog/${_slug}`
      );
    }

    case 'POST': {
      const _slug = decodeURI(`${slug[0]}/${slug[1]}/${slug[2]}`);
      return allBlogs.filter((item) => item.slug_post === `/blog/${_slug}`);
    }

    default:
      return [];
  }
};
