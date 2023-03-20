import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import List from "../components/posts/List";

export const metadata: Metadata = {
  title: "Blog | Estarlincito",
  description:
    "Lee mis pensamientos sobre desarrollo de software, diseño web criptomonedas y mucho más.",
};

const BlogPage = () => {
  return (
    <main className="xl:m-[5%]">
      <List posts={allBlogs} />
    </main>
  );
};

export default BlogPage;
