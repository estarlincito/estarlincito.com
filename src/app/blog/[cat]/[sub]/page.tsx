import { BlogHeader } from '@/components/UI/molecules';
import { notFound } from 'next/navigation';
import { PostList } from '@UI/organisms';
import { Post, SEO } from '@/lib';
import { BlogSeo, ParamsSub } from '@/types';
import { Suspense } from 'react';
import { LoadingArticle } from '@/components/loading';

interface Props {
  params: ParamsSub;
}

export const generateMetadata = ({ params }: Props) => {
  const { blogSub } = new Post(params);

  if (blogSub.length === 0) {
    return;
  }

  //blogseo
  const {
    seoSubCategory: { description, imagesUrl, imagesAlt },
  } = blogSub[0].blogseo as BlogSeo;

  const { metadata } = new SEO({
    title: `Estarlincito | ${blogSub[0].subcategory}`,
    description,
    openGraph: {
      type: 'website',
      url: `https://estarlincito.com/blog/${`${params.cat}/${params.sub}`}`,
    },
    imagesUrl,
    imagesAlt,
  });

  return metadata;
};

const SubPage = ({ params }: Props) => {
  const { blogSub } = new Post(params);

  if (blogSub.length === 0) {
    notFound();
  }

  const {
    seoSubCategory: { description },
  } = blogSub[0].blogseo as BlogSeo;

  return (
    <>
      <BlogHeader title={blogSub[0].subcategory} sumary={description} />
      <Suspense fallback={<LoadingArticle />}>
        <PostList posts={blogSub} />
      </Suspense>
    </>
  );
};

export default SubPage;
