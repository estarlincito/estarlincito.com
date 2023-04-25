import { notFound } from 'next/navigation';
import { Post, setMetadata } from '@/lib';
import { PostList, Maindoc } from '@UI/organisms';
import { ParamsCategory } from '@/types';

export const generateMetadata = ({ params }: ParamsCategory) => {
  const posts = Post.getCategory({ ...params });

  if (posts.length === 0) {
    return;
  }

  return setMetadata({
    title: posts[0].category,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
    appUrl: `estarlincito.com/blog/${posts[0].category}`,
    imageUrl:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    imageAlt: 'Una macbook, una ipad...',
  });
};

const CategoryPage: React.FC<ParamsCategory> = ({ params }) => {
  const posts = Post.getCategory({ ...params });

  if (posts.length === 0) {
    notFound();
  }

  return (
    <Maindoc>
      <PostList posts={posts} />
    </Maindoc>
  );
};

export default CategoryPage;
