import { Post, SEO } from '@/lib';
import { notFound } from 'next/navigation';
import { PostLayout } from '@UI/organisms';
import { ParamsPost } from '@/types';
import { Suspense } from 'react';
import { LoadingPost } from '@/components/loading';

interface Props {
  params: ParamsPost;
}

//SEO
export const generateMetadata = ({ params }: Props) => {
  const { blogPost } = new Post(params);

  if (blogPost === undefined) {
    return;
  }

  const { metadata } = new SEO({
    title: blogPost.title,
    description: blogPost.summary,
    openGraph: {
      type: 'article',
      publishedTime: blogPost.publishedAt,
      authors: blogPost.author,
      url: `https://estarlincito.com/blog${blogPost.slug_post}`,
    },
    imagesUrl: blogPost.cover,
    imagesAlt: blogPost.coverAlt,
  });

  return metadata;
};

const PostPage = ({ params }: Props) => {
  const { blogPost } = new Post(params);

  if (blogPost === undefined) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingPost />}>
      <PostLayout {...blogPost} />
    </Suspense>
  );
};

export default PostPage;
