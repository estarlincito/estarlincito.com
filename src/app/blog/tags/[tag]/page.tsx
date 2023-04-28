import { PostList } from '@/components/UI/organisms';
import { SEO, Descriptions } from '@/lib';
import { TagPageProps } from '@/types';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

//SEO
export const generateMetadata = ({ params: { tag } }: TagPageProps) => {
  const { metadata } = new SEO({
    title: `Estarlincito | Tag #${decodeURI(tag)}`,
    description: Descriptions.base.tag,
    openGraph: {
      type: 'website',
      url: `https://estarlincito.com/blog/tags/${tag}`,
    },
    imagesUrl:
      'https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    imagesAlt: 'imagen de palabras',
  });
  return metadata;
};

const TagPage: React.FC<TagPageProps> = ({ params: { tag } }) => {
  const posts = allBlogs.filter((item) =>
    item.tags.some((tagItem) => tagItem === decodeURI(tag))
  );

  if (posts.length === 0) {
    notFound();
  }

  return <PostList posts={posts} />;
};

export default TagPage;
