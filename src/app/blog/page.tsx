import Blog from '@/constants/blog';
import SEO from '@/lib/seo';
import { allBlogs } from 'contentlayer/generated';
import { Suspense } from 'react';
import BlogHeader from './components/blog-header';
import LoadingArticle from './components/loading/article';
import PostList from './components/post-list';

export const { metadata } = new SEO({
  title: Blog.seo.title,
  description: Blog.seo.description,
  openGraph: Blog.seo.openGraph,
  imagesUrl: Blog.seo.imagesUrl,
  imagesAlt: Blog.seo.imagesAlt,
});

const BlogPage = () => {
  return (
    <>
      <BlogHeader title={Blog.titleH} sumary={Blog.seo.description} />

      <Suspense fallback={<LoadingArticle />}>
        <PostList posts={allBlogs} />
      </Suspense>
    </>
  );
};

export default BlogPage;
