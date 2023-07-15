import allPosts from './allPosts';
import Words from './words';

const allTags = () => {
  //to concat all tags array
  const _tags = allPosts.flatMap((item) => item.tags);

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

  //Category
  readonly postsCat = allPosts.filter(
    (item) => item.urls.cat === `/blog/${this.params.cat}`
  );

  //SubCategory
  readonly postsSub = allPosts.filter(
    (item) => item.urls.sub === `/blog/${this.params.cat}/${this.params.sub}`
  );

  //Post
  readonly post = allPosts.find(
    (item) =>
      item.urls.post ===
      `/blog/${this.params.cat}/${this.params.sub}/${this.params.post}`
  );

  //Tag
  readonly postsTag = allPosts.filter((item) =>
    item.tags.some((tagItem) => tagItem === this.params.tag)
  );

  //All tags
  static readonly allTags = allTags();
}

export default Post;
