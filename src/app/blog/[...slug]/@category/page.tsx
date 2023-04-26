import { notFound } from 'next/navigation';
import { Post, SEO, descriptions } from '@/lib';
import { PostList } from '@UI/organisms';
import { ParamsProps } from '@/types';
import { BlogHeader } from '@/components/UI/molecules';

export const generateMetadata = ({ params: { slug } }: ParamsProps) => {
  const posts = Post(slug[0], 'CATEGORY');

  if (posts.length === 0) {
    return;
  }

  const { metadata } = new SEO({
    title: posts[0].category,
    description: descriptions(posts[0].category as 'dynami'),
    openGraph: { url: `estarlincito.com/blog/${posts[0].category}` },
    imagesUrl:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    imagesAlt: 'Una macbook, una ipad...',
  });

  return metadata;
};

const CategoryPage: React.FC<ParamsProps> = ({ params: { slug } }) => {
  const posts = Post(slug[0], 'CATEGORY');

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      <BlogHeader
        title={posts[0].category}
        sumary={descriptions(posts[0].category as 'dynami')}
      />
      <PostList posts={posts} />
    </>
  );
};

export default CategoryPage;
