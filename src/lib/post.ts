import { allBlogs } from 'contentlayer/generated';
import Words from './words';

const allTags = () => {
  //to concat all tags array
  const _tags = allBlogs.flatMap((item) => item.tags);

  //to count all tags
  const count: { [key: string]: number } = {};
  _tags.forEach((item) => {
    Words.check(item);
    count[item] = (count[item] || 0) + 1;
  });

  //to order all tags on {}[]
  const tags: { tag: string; count: number }[] = [];
  for (const key in count) {
    tags.push({ tag: key, count: count[key] });
  }

  return tags;
};

interface Params {
  cat?: string;
  sub?: string;
  post?: string;
  tag?: string;
}

class Post {
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
  readonly post = allBlogs.find(
    (item) =>
      item.urls.post ===
      `/blog/${this.params.cat}/${this.params.sub}/${this.params.post}`
  );

  //Posts by Tag
  readonly postsTag = allBlogs.filter((item) =>
    item.tags.some((tagItem) => tagItem === this.params.tag)
  );

  //All tags
  static readonly allTags = allTags();
}

export default Post;
