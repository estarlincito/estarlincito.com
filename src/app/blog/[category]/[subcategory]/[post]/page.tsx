import { Post, SEO } from '@/lib';
import { notFound } from 'next/navigation';
import { PostLayout, Maindoc } from '@UI/organisms';
import { ParamsPost } from '@/types';

//SEO
export const generateMetadata = ({ params }: ParamsPost) => {
  const post = Post.getPost({ ...params });

  if (post === undefined) {
    return;
  }

  const { metadata } = new SEO({
    title: post.teme,
    description: post.summary,
    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author,
      url: `https://estarlincito.com/blog${post.slug_post}`,
    },
    imagesUrl: post.cover,
    imagesAlt: post.coverAlt,
  });

  return metadata;
};

const postPage: React.FC<ParamsPost> = ({ params }) => {
  const post = Post.getPost({ ...params });

  if (post === undefined) {
    notFound();
  }

  return (
    <Maindoc>
      <PostLayout {...post} />
    </Maindoc>
  );
};

export default postPage;
