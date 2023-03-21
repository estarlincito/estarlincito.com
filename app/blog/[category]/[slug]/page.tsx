import Postlayout from "@/app/components/posts/Postlayout";
import { getPost } from "@/app/utils";
import { notFound } from "next/navigation";

type props = {
  params: {
    category: string;
    slug: string;
  };
};

export const generateMetadata = ({ params }: props) => {
  const post = getPost(params);

  if (!post) {
    return;
  }
  return { title: post.title, description: post.summary };
};

const PostPage = ({ params }: props) => {
  const post = getPost(params);

  if (!post) {
    notFound();
  }

  return <Postlayout {...post} />;
};

export default PostPage;
