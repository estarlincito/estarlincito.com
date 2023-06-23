import Post from '@/lib/post';
import SEO from '@/lib/seo';
import { ParamsPost } from '@/types/params';
import LoadingPost from '@BlogComponents/loading/post';
import PostLayout from '@BlogComponents/postlayout';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Props {
  params: ParamsPost;
}

//SEO
export const generateMetadata = ({ params }: Props) => {
  const { post } = new Post(params);

  if (post === undefined) {
    return;
  }

  const { metadata } = new SEO({
    title: post.title,
    description: post.summary,
    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author,
      url: `https://estarlincito.com${post.urls.post}`,
    },
    imagesUrl: post.cover,
    imagesAlt: post.coverAlt,
  });

  return metadata;
};

const PostPage = ({ params }: Props) => {
  const { post } = new Post(params);

  if (post === undefined) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingPost />}>
      <PostLayout {...post} />
    </Suspense>
  );
};

export default PostPage;
