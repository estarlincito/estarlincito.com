import { BlogHeader } from '@/components/UI/molecules';
import { Post, SEO } from '@/lib';
import { notFound } from 'next/navigation';
import { PostList } from '@UI/organisms';
import { BlogSeo, Slug, SlugProps } from '@/types';

export const CategorySEO = (slug: Slug) => {
  const posts = Post(slug, 'CATEGORY');

  if (posts.length === 0) {
    return;
  }

  //blogseo
  const {
    seoCategory: { description, imagesUrl, imagesAlt },
  } = posts[0].blogseo as BlogSeo;

  const { metadata } = new SEO({
    title: `Estarlincito | ${posts[0].category}`,
    description,
    openGraph: {
      type: 'website',
      url: `https://estarlincito.com/blog/${slug}`,
    },
    imagesUrl,
    imagesAlt,
  });

  return metadata;
};

export const CategoryPage = ({ slug }: SlugProps) => {
  const posts = Post(slug, 'CATEGORY');

  if (posts.length === 0) {
    notFound();
  }

  const {
    seoCategory: { description },
  } = posts[0].blogseo as BlogSeo;

  return (
    <>
      <BlogHeader title={posts[0].category} sumary={description} />
      <PostList posts={posts} />
    </>
  );
};
