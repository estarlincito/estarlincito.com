import { SlugCategory, SlugSubcategory, SlugPost } from '@/types';
import { allBlogs } from 'contentlayer/generated';

export const Post = {
  //Get posts category
  getCategory({ category }: SlugCategory) {
    return allBlogs.filter(
      (item) => item.slug_category === decodeURI(`/blog/${category}`)
    );
  },

  //Get posts subcategory
  getSubCategory({ category, subcategory }: SlugSubcategory) {
    return allBlogs.filter(
      (item) =>
        item.slug_subcategory === decodeURI(`/blog/${category}/${subcategory}`)
    );
  },

  //Get post
  getPost({ category, subcategory, post }: SlugPost) {
    return allBlogs.find(
      (item) =>
        item.slug_post === decodeURI(`/blog/${category}/${subcategory}/${post}`)
    );
  },
};
