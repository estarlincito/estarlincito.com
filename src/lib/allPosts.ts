import { allBlogs } from 'contentlayer/generated';

const allPosts = allBlogs.filter((post) => post.show === true);

export default allPosts;
