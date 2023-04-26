import { notFound } from 'next/navigation';
import { Post, SEO } from '@/lib';
import { PostList } from '@UI/organisms';
import { ParamsProps } from '@/types';
import { BlogHeader } from '@/components/UI/molecules';

export const generateMetadata = ({ params: { slug } }: ParamsProps) => {
  const _slug = `${slug[0]}/${slug[1]}`;
  const posts = Post(_slug, 'SUBCATEGORY');

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

const SubCategoryPage: React.FC<ParamsProps> = ({ params: { slug } }) => {
  const _slug = `${slug[0]}/${slug[1]}`;
  const posts = Post(_slug, 'SUBCATEGORY');

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      <BlogHeader title={posts[0].subcategory} sumary='' />
      <PostList posts={posts} />;
    </>
  );
};

export default SubCategoryPage;
