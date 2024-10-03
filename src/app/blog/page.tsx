import Container from '@/components/container';
import Blog from '@/constants/blog';
import SEO from '@/lib/seo';
import { allBlogs } from 'contentlayer/generated';
import { Suspense } from 'react';
import BlogHeader from './components/blog-header';
import PostList from './components/postlist';

export const { metadata } = new SEO({
  title: Blog.seo.title,
  description: Blog.seo.description,
  openGraph: Blog.seo.openGraph,
  image_url: Blog.seo.image_url,
  image_alt: Blog.seo.image_alt,
});

const BlogPage = () => {
  return (
    <Container size='4'>
      <BlogHeader title={Blog.titleH} sumary={Blog.seo.description} />
      <Suspense fallback={<></>}>
        <PostList posts={allBlogs} />
      </Suspense>
    </Container>
  );
};

export default BlogPage;
