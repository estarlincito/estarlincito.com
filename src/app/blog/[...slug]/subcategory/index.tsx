import { BlogHeader } from '@/components/UI/molecules';
import { Post, SEO, descriptions } from '@/lib';
import { notFound } from 'next/navigation';
import { PostList } from '@UI/organisms';
import { Slug, SlugProps } from '@/types';

export const SubCategorySEO = (slug: Slug) => {
  const _slug = `${slug[0]}/${slug[1]}`;
  const posts = Post(_slug, 'SUBCATEGORY');

  if (posts.length === 0) {
    return;
  }

  const { metadata } = new SEO({
    title: posts[0].subcategory,
    description: descriptions(posts[0].subcategory as 'dynami'),
    openGraph: {
      type: 'website',
      url: `https://estarlincito.com/blog/${_slug}`,
    },
    imagesUrl:
      'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    imagesAlt: 'teclado, lente, cuaderno',
  });

  return metadata;
};

export const SubCategoryPage = ({ slug }: SlugProps) => {
  const _slug = `${slug[0]}/${slug[1]}`;
  const posts = Post(_slug, 'SUBCATEGORY');

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      <BlogHeader
        title={posts[0].subcategory}
        sumary={descriptions(posts[0].subcategory as 'dynami')}
      />
      <PostList posts={posts} />
    </>
  );
};
