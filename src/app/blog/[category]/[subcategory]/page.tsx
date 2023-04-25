import { notFound } from 'next/navigation';
import { Post, SEO } from '@/lib';
import { PostList, Maindoc } from '@UI/organisms';
import { ParamsSubcategory } from '@/types';

export const generateMetadata = ({ params }: ParamsSubcategory) => {
  const posts = Post.getSubCategory({ ...params });

  if (posts.length === 0) {
    return;
  }

  const { metadata } = new SEO({
    title: posts[0].subcategory,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
    openGraph: {
      url: `estarlincito.com/blog${posts[0].subcategory}`,
    },
    imagesUrl:
      'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    imagesAlt: 'teclado, lente, cuaderno',
  });

  return metadata;
};

const SubCategoryPage: React.FC<ParamsSubcategory> = ({ params }) => {
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
