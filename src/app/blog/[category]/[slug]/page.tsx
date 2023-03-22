import { Postlayout } from "@/components/posts";
import { getPost } from "@/utils";
import { redirect } from "next/navigation";

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
    redirect("/not-found");
  }

  return <Postlayout {...post} />;
};

export default PostPage;
