import { BlogHeader } from '@/components/UI/molecules';
import { Post, SEO } from '@/lib';
import { notFound } from 'next/navigation';
import { PostList } from '@UI/organisms';
import { Description, Slug, SlugProps } from '@/types';

export const CategorySEO = (slug: Slug) => {
  const _slug = slug;
  const posts = Post(_slug, 'CATEGORY');

  if (posts.length === 0) {
    return;
  }

  const { metadata } = new SEO({
    title: `Estarlincito | ${posts[0].category}`,
    description: posts[0].category as Description,
    openGraph: {
      type: 'website',
      url: `https://estarlincito.com/blog/${_slug}`,
    },
    imagesUrl:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    imagesAlt: 'Una macbook, una ipad...',
  });

  return metadata;
};

export const CategoryPage = ({ slug }: SlugProps) => {
  const posts = Post(slug, 'CATEGORY');

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      <BlogHeader
        title={posts[0].category}
        sumary={posts[0].category as Description}
      />
      <PostList posts={posts} />
    </>
  );
};
