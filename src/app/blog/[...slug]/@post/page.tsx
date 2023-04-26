import { Post, SEO } from '@/lib';
import { notFound } from 'next/navigation';
import { PostLayout } from '@UI/organisms';
import { Description, ParamsProps } from '@/types';

//SEO
export const generateMetadata = ({ params: { slug } }: ParamsProps) => {
  const _slug = `${slug[0]}/${slug[1]}/${slug[2]}`;
  const post = Post(_slug, 'POST')[0];

  if (post === undefined) {
    return;
  }

  const { metadata } = new SEO({
    title: post.teme,
    description: post.summary as Description,
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

const postPage: React.FC<ParamsProps> = ({ params: { slug } }) => {
  const _slug = `${slug[0]}/${slug[1]}/${slug[2]}`;
  const post = Post(_slug, 'POST')[0];

  if (post === undefined) {
    notFound();
  }

  return <PostLayout {...post} />;
};

export default postPage;
