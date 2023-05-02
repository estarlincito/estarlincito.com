import { allBlogs } from 'contentlayer/generated';

interface Params {
  cat?: string;
  sub?: string;
  post?: string;
  tag?: string;
}

export class Post {
  constructor(public params: Params) {
    this.params = params;
  }

  //Posts by Category
  readonly postsCat = allBlogs.filter(
    (item) => item.urls.cat === `/blog/${this.params.cat}`
  );

  //Posts by Sub Category
  readonly postsSub = allBlogs.filter(
    (item) => item.urls.sub === `/blog/${this.params.cat}/${this.params.sub}`
  );

  //Post by url post
  readonly posts = allBlogs.find(
    (item) =>
      item.urls.post ===
      `/blog/${this.params.cat}/${this.params.sub}/${this.params.post}`
  );

  //Posts by Tag
  readonly postsTag = allBlogs.filter((item) =>
    item.tags.some((tagItem) => tagItem === this.params.tag)
  );
}
