import { LoadingPost } from '@/components/loading';
import { Post, SEO } from '@/lib';
import { ParamsPost } from '@/types';
import { PostLayout } from '@UI/organisms';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Props {
  params: ParamsPost;
}

//SEO
export const generateMetadata = ({ params }: Props) => {
  const { posts } = new Post(params);

  if (posts === undefined) {
    return;
  }

  const { metadata } = new SEO({
    title: posts.title,
    description: posts.summary,
    openGraph: {
      type: 'article',
      publishedTime: posts.publishedAt,
      authors: posts.author,
      url: `https://estarlincito.com${posts.urls.post}`,
    },
    imagesUrl: posts.cover,
    imagesAlt: posts.coverAlt,
  });

  return metadata;
};

const PostPage = ({ params }: Props) => {
  const { posts } = new Post(params);

  if (posts === undefined) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingPost />}>
      <PostLayout {...posts} />
    </Suspense>
  );
};

export default PostPage;
