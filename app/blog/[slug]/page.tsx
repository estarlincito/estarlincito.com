import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import Layout from "@/components/posts/Layout";

export const generateStaticParams = async () => {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
};

type props = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params }: props) => {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Layout {...post} />;
};

export default PostPage;
