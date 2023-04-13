import { Post } from '@/utils';
import { notFound } from 'next/navigation';
import { PostLayout, Maindoc } from '@UI/organisms';
import { params_post } from '@/types';

//SEO
export const generateMetadata = ({ params }: params_post) => {
  const post = Post.getPost({ ...params });

  if (post === undefined) {
    return;
  }
  return {
    title: post.teme,
    description: post.summary,
  };
};

const postPage: React.FC<params_post> = ({ params }) => {
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
