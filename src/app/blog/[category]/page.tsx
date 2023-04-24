import { notFound } from 'next/navigation';
import { Post } from '@/lib';
import { PostList, Maindoc } from '@UI/organisms';
import { ParamsCategory } from '@/types';

export const generateMetadata = ({ params }: ParamsCategory) => {
  const posts = Post.getCategory({ ...params });

  if (posts.length === 0) {
    return;
  }
  return {
    title: posts[0].category,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
  };
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
