import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import Layout from "@/app/components/posts/Layout";

type props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: props) => {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }
  return { title: post.title, description: post.summary };
};

const PostPage = ({ params }: props) => {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Layout {...post} />;
};

export default PostPage;
