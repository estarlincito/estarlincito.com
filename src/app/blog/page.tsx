import { BlogHeader } from '@/components/UI/molecules';
import { LoadingArticle } from '@/components/loading';
import { PostList } from '@/components/UI/organisms';
import { allBlogs } from 'contentlayer/generated';
import { Suspense } from 'react';
import { SEO } from '@/lib';

//SEO
const description =
  'Lee mis pensamientos sobre desarrollo de software, diseño web, criptomonedas y mucho más.';

export const { metadata } = new SEO({
  title: 'Estarlincito | Blog',
  description,
  openGraph: { type: 'website', url: 'https://estarlincito.com/blog/' },
  imagesUrl:
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  imagesAlt: 'Una macbook y una taza',
});

const BlogPage = () => {
  return (
    <>
      <BlogHeader title='Bienvenid@ a mi Blog' sumary={description} />

      <Suspense fallback={<LoadingArticle />}>
        <PostList posts={allBlogs} />
      </Suspense>
    </>
  );
};

export default BlogPage;
