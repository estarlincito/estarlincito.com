import PostList from '@/app/blog/components/postlist';
import Container from '@/components/container';
import Blogc from '@/constants/blogc';
import Post from '@/lib/post';
import SEO from '@/lib/seo';
import { ParamsSub } from '@/types/params';
import BlogHeader from '@BlogComponents/blog-header';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Props {
  params: ParamsSub;
}

export const generateMetadata = ({ params }: Props) => {
  const { postsSub } = new Post(params);

  if (postsSub.length === 0) {
    return;
  }

  const { description, imagesUrl, imagesAlt } = postsSub[0].blogseo.sub;

  const { metadata } = new SEO({
    title: Blogc.seo.title(postsSub[0].subcategory),
    description,
    openGraph: Blogc.seo.openGraph(`${params.cat}/${params.sub}`),
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
    <Container size='4'>
      <BlogHeader title={postsSub[0].subcategory} sumary={description} />
      <Suspense fallback={<></>}>
        <PostList posts={postsSub} />
      </Suspense>
    </Container>
  );
};

export default SubPage;
