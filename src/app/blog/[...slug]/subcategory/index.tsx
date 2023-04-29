import { BlogHeader } from '@/components/UI/molecules';
import { Post, SEO } from '@/lib';
import { notFound } from 'next/navigation';
import { PostList } from '@UI/organisms';
import { BlogSeo, Slug, SlugProps } from '@/types';

export const SubCategorySEO = (slug: Slug) => {
  const posts = Post(slug, 'SUBCATEGORY');

  if (posts.length === 0) {
    return;
  }

  //blogseo
  const {
    seoSubCategory: { description, imagesUrl, imagesAlt },
  } = posts[0].blogseo as BlogSeo;

  const { metadata } = new SEO({
    title: `Estarlincito | ${posts[0].subcategory}`,
    description,
    openGraph: {
      type: 'website',
      url: `https://estarlincito.com/blog/${`${slug[0]}/${slug[1]}`}`,
    },
    imagesUrl,
    imagesAlt,
  });

  return metadata;
};

export const SubCategoryPage = ({ slug }: SlugProps) => {
  const posts = Post(slug, 'SUBCATEGORY');

  if (posts.length === 0) {
    notFound();
  }

  const {
    seoSubCategory: { description },
  } = posts[0].blogseo as BlogSeo;

  return (
    <>
      <BlogHeader title={posts[0].subcategory} sumary={description} />
      <PostList posts={posts} />
    </>
  );
};
