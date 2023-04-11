import { PostList, _Main } from '@/components/UI/organisms';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

interface Props {
  params: { tag: string };
}

//SEO
export const generateMetadata = ({ params }: Props) => {
  const { tag } = params;
  const title = `${tag.charAt(0).toUpperCase()}${tag.slice(1)} | Estarlincito`;

  return {
    title,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
  };
};

const TagPage: React.FC<Props> = ({ params }) => {
  const { tag } = params;

  const posts = allBlogs.filter((item) =>
    item.tags.some((tagItem) => tagItem === tag)
  );

  if (posts.length === 0) {
    notFound();
  }

  return (
    <_Main>
      <PostList posts={posts} />
    </_Main>
  );
};

export default TagPage;
