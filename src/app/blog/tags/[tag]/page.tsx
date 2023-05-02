import { PostList } from '@/components/UI/organisms';
import { LoadingArticle } from '@/components/loading';
import { Post, SEO } from '@/lib';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

//Types
interface Props {
  params: { tag: string };
}

//SEO
export const generateMetadata = ({ params: { tag } }: Props) => {
  const { metadata } = new SEO({
    title: `Estarlincito | Tag #${tag}`,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
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

const TagPage: React.FC<Props> = ({ params }) => {
  const { postsTag } = new Post(params);

  if (postsTag.length === 0) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingArticle />}>
      <PostList posts={postsTag} />
    </Suspense>
  );
};

export default TagPage;
