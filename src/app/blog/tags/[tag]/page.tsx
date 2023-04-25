import { PostList, Maindoc } from '@/components/UI/organisms';
import { setMetadata } from '@/lib';
import { TagPageProps } from '@/types';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

//SEO
export const generateMetadata = ({ params }: TagPageProps) => {
  const { tag } = params;
  const title = `${tag.charAt(0).toUpperCase()}${tag.slice(1)} | Estarlincito`;

  return setMetadata({
    title,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
    appUrl: `https://estarlincito.com/blog/tags`,
    imageUrl:
      'https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    imageAlt: 'imagen de palabras',
  });
};

const TagPage: React.FC<TagPageProps> = ({ params }) => {
  const { tag } = params;

  const posts = allBlogs.filter((item) =>
    item.tags.some((tagItem) => tagItem === tag)
  );

  if (posts.length === 0) {
    notFound();
  }

  return (
    <Maindoc>
      <PostList posts={posts} />
    </Maindoc>
  );
};

export default TagPage;
