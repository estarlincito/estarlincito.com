import PostList from '@/app/blog/components/postlist';
import Post from '@/lib/post';
import SEO from '@/lib/seo';
import LoadingArticle from '@BlogComponents/loading/article';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface TagPageProps {
  params: { tag: string };
}

export const generateMetadata = (props: TagPageProps) => {
  const { metadata } = new SEO({
    title: `Estarlincito | Tag #${props.params.tag}`,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
    openGraph: {
      type: 'website',
      url: `https://estarlincito.com/blog/tags/${props.params.tag}`,
    },
    imagesUrl:
      'https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    imagesAlt: 'imagen de palabras',
  });
  return metadata;
};

const TagPage = (props: TagPageProps) => {
  const { postsTag } = new Post(props.params);

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
