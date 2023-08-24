import Blogc from '@/constants/blogc';
import Post from '@/lib/post';
import SEO from '@/lib/seo';
import { ParamsCat } from '@/types/params';
import BlogHeader from '@BlogComponents/blog-header';
import LoadingArticle from '@BlogComponents/loading/article';
import PostList from '@BlogComponents/post-list';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Props {
  params: ParamsCat;
}

export const generateMetadata = ({ params }: Props) => {
  const { postsCat } = new Post(params);

  if (postsCat.length === 0) {
    return;
  }

  const { description, imagesUrl, imagesAlt } = postsCat[0].blogseo.cat;

  const { metadata } = new SEO({
    title: Blogc.seo.title(postsCat[0].category),
    description,
    openGraph: Blogc.seo.openGraph(params.cat),
    imagesUrl,
    imagesAlt,
  });

  return metadata;
};

const CatPage = ({ params }: Props) => {
  const { postsCat } = new Post(params);

  if (postsCat.length === 0) {
    notFound();
  }

  const { description } = postsCat[0].blogseo.cat;

  return (
    <>
      <BlogHeader title={postsCat[0].category} sumary={description} />
      <Suspense fallback={<LoadingArticle />}>
        <PostList posts={postsCat} />
      </Suspense>
    </>
  );
};

export default CatPage;
