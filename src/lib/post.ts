import { allBlogs } from 'contentlayer/generated';

interface Params {
  cat: string;
  sub?: string;
  post?: string;
}

export class Post {
  constructor(public params: Params) {
    this.params = params;
  }

  //Post Category
  readonly blogCat = allBlogs.filter(
    (item) => item.slug_category === decodeURI(`/blog/${this.params.cat}`)
  );

  //Post Sub Category
  readonly blogSub = allBlogs.filter(
    (item) =>
      item.slug_subcategory ===
      decodeURI(`/blog/${this.params.cat}/${this.params.sub}`)
  );

  //Post
  readonly blogPost = allBlogs.find(
    (item) =>
      item.slug_post ===
      decodeURI(
        `/blog/${this.params.cat}/${this.params.sub}/${this.params.post}`
      )
  );
}
