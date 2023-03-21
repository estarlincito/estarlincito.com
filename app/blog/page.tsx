import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import Postlist from "../components/posts/Postlist";

export const metadata: Metadata = {
  title: "Blog | Estarlincito",
  description:
    "Lee mis pensamientos sobre desarrollo de software, diseño web criptomonedas y mucho más.",
};

const BlogPage = () => {
  return <Postlist posts={allBlogs} />;
};

export default BlogPage;
