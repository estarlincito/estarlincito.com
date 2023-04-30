import { BlogHeader } from '@/components/UI/molecules';
import { notFound } from 'next/navigation';
import { PostList } from '@UI/organisms';
import { Post, SEO } from '@/lib';
import { BlogSeo, ParamsCat } from '@/types';
import { Suspense } from 'react';
import { LoadingArticle } from '@/components/loading';

interface Props {
  params: ParamsCat;
}

export const generateMetadata = ({ params }: Props) => {
  const { blogCat } = new Post(params);

  if (blogCat.length === 0) {
    return;
  }

  //blogseo
  const {
    seoCategory: { description, imagesUrl, imagesAlt },
  } = blogCat[0].blogseo as BlogSeo;

  const { metadata } = new SEO({
    title: `Estarlincito | ${blogCat[0].category}`,
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
  const { blogCat } = new Post(params);

  if (blogCat.length === 0) {
    notFound();
  }

  const {
    seoCategory: { description },
  } = blogCat[0].blogseo as BlogSeo;

  return (
    <>
      <BlogHeader title={blogCat[0].category} sumary={description} />

      <Suspense fallback={<LoadingArticle />}>
        <PostList posts={blogCat} />
      </Suspense>
    </>
  );
};

export default CatPage;
