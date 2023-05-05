import { BlogHeader } from '@/components/UI/molecules';
import { LoadingArticle } from '@/components/loading';
import { Post, SEO } from '@/lib';
import { ParamsCat } from '@/types';
import { PostList } from '@UI/organisms';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Props {
  params: ParamsCat;
}

//SEO
export const generateMetadata = ({ params }: Props) => {
  const { postsCat } = new Post(params);

  if (postsCat.length === 0) {
    return;
  }

  //blogseo
  const { description, imagesUrl, imagesAlt } = postsCat[0].blogseo.cat;

  const { metadata } = new SEO({
    title: `Estarlincito | ${postsCat[0].category}`,
    description,
    openGraph: {
      type: 'website',
      url: `https://estarlincito.com/blog/${params.cat}`,
    },
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
