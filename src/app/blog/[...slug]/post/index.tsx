import { Post, SEO } from '@/lib';
import { notFound } from 'next/navigation';
import { PostLayout } from '@UI/organisms';
import { Slug, SlugProps } from '@/types';

//SEO
export const postSEO = (slug: Slug) => {
  const post = Post(slug, 'POST')[0];

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
      url: `https://estarlincito.com/blog${post.slug_post}`,
    },
    imagesUrl: post.cover,
    imagesAlt: post.coverAlt,
  });

  return metadata;
};

export const PostPage = ({ slug }: SlugProps) => {
  const post = Post(slug, 'POST')[0];

  if (post === undefined) {
    notFound();
  }

  return <PostLayout {...post} />;
};
