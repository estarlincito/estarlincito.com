import { redirect } from "next/navigation";
import { getPostsCategory } from "@/utils";
import { Postlist } from "@/components/posts";

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
    redirect("/not-found");
  }

  return <Postlist posts={posts} />;
};

export default PostPage;
