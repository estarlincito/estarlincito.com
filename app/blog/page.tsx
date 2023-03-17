import List from "@/components/posts/List";
import { allBlogs } from "contentlayer/generated";

const BlogPage = () => {
  return <List posts={allBlogs} />;
};

export default BlogPage;
