import Post from '@/lib/post';
import SEO from '@/lib/seo';
import { ParamsSub } from '@/types/params';
import BlogHeader from '@BlogComponents/blog-header';
import LoadingArticle from '@BlogComponents/loading/article';
import PostList from '@BlogComponents/post-list';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Props {
  params: ParamsSub;
}

//SEO
export const generateMetadata = ({ params }: Props) => {
  const { postsSub } = new Post(params);

  if (postsSub.length === 0) {
    return;
  }

  //blogseo
  const { description, imagesUrl, imagesAlt } = postsSub[0].blogseo.sub;

  const { metadata } = new SEO({
    title: `Estarlincito | ${postsSub[0].subcategory}`,
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
  const { postsSub } = new Post(params);

  if (postsSub.length === 0) {
    notFound();
  }

  const { description } = postsSub[0].blogseo.sub;

  return (
    <>
      <BlogHeader title={postsSub[0].subcategory} sumary={description} />
      <Suspense fallback={<LoadingArticle />}>
        <PostList posts={postsSub} />
      </Suspense>
    </>
  );
};

export default SubPage;
