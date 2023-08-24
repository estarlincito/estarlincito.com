import Blog from '@/constants/blog';
import SEO from '@/lib/seo';
import { Suspense } from 'react';
import BlogHeader from './components/blog-header';
import LoadingArticle from './components/loading/article';

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
        {/* <PostList posts={allPosts} /> */}
        <br />
        <br />
        <div>Por ahora esta sección está en mantenimiento</div>
      </Suspense>
    </>
  );
};

export default BlogPage;
