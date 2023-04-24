import { Post } from '@/lib';
import { notFound } from 'next/navigation';
import { PostLayout, Maindoc } from '@UI/organisms';
import { ParamsPost } from '@/types';

//SEO
export const generateMetadata = ({ params }: ParamsPost) => {
  const post = Post.getPost({ ...params });

  if (post === undefined) {
    return;
  }
  return {
    title: post.teme,
    description: post.summary,
  };
};

const postPage: React.FC<ParamsPost> = ({ params }) => {
  const post = Post.getPost({ ...params });

  if (post === undefined) {
    notFound();
  }

  return (
    <Maindoc>
      <PostLayout {...post} />
      {/* <aside></aside> */}
    </Maindoc>
  );
};

export default postPage;
