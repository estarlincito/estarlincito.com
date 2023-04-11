import { Slug_category, Slug_subcategory, Slug_post } from '@/types';
import { allBlogs } from 'contentlayer/generated';

export const Post = {
  //Get posts category
  getCategory({ category }: Slug_category) {
    return allBlogs.filter(
      (item) => item.slug_category === decodeURI(`/blog/${category}`)
    );
  },

  //Get posts subcategory
  getSubCategory({ category, subcategory }: Slug_subcategory) {
    return allBlogs.filter(
      (item) =>
        item.slug_subcategory === decodeURI(`/blog/${category}/${subcategory}`)
    );
  },

  //Get post
  getPost({ category, subcategory, post }: Slug_post) {
    return allBlogs.find(
      (item) =>
        item.slug_post === decodeURI(`/blog/${category}/${subcategory}/${post}`)
    );
  },
};
