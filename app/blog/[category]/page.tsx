import { notFound } from "next/navigation";
import Postlist from "@/app/components/posts/Postlist";
import { getPostsCategory } from "@/app/utils";

type props = {
  params: {
    category: string;
  };
};

export const generateMetadata = ({ params }: props) => {
  const posts = getPostsCategory(params.category);

  if (posts.length === 0) {
    return;
  }
  return {
    title: posts[0].category,
    description:
      "Artículos informativos, consejos prácticos y enlaces a recursos útiles.",
  };
};

const PostPage = ({ params }: props) => {
  const posts = getPostsCategory(params.category);

  if (posts.length === 0) {
    notFound();
  }

  return <Postlist posts={posts} />;
};

export default PostPage;
