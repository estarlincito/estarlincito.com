import { notFound } from 'next/navigation';
import { Post } from '@/utils';
import { PostList, Maindoc } from '@UI/organisms';
import { params_subcategory } from '@/types';

export const generateMetadata = ({ params }: params_subcategory) => {
  const posts = Post.getSubCategory({ ...params });

  if (posts.length === 0) {
    return;
  }
  return {
    title: posts[0].subcategory,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
  };
};

const SubCategoryPage: React.FC<params_subcategory> = ({ params }) => {
  const posts = Post.getSubCategory({ ...params });

  if (posts.length === 0) {
    notFound();
  }

  return (
    <Maindoc>
      <PostList posts={posts} />
    </Maindoc>
  );
};

export default SubCategoryPage;
