import { PostList, Maindoc } from '@/components/UI/organisms';
import { TagPageProps } from '@/types';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

//SEO
export const generateMetadata = ({ params }: TagPageProps) => {
  const { tag } = params;
  const title = `${tag.charAt(0).toUpperCase()}${tag.slice(1)} | Estarlincito`;

  return {
    title,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
  };
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
