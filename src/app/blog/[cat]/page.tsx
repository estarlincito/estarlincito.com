import PostList from '@/app/blog/components/postlist';
import Container from '@/components/container';
import Blogc from '@/constants/blogc';
import Post from '@/lib/post';
import SEO from '@/lib/seo';
import { ParamsCat } from '@/types/params';
import BlogHeader from '@BlogComponents/blog-header';
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
    <Container size='4'>
      <BlogHeader title={postsCat[0].category} sumary={description} />
      <Suspense fallback={<></>}>
        <PostList posts={postsCat} />
      </Suspense>
    </Container>
  );
};

export default CatPage;
