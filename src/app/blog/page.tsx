import { BlogHeader } from '@/components/UI/molecules';
import { PostList } from '@/components/UI/organisms';
import { allBlogs } from 'contentlayer/generated';
import { SEO, Descriptions } from '@/lib';

//SEO
const description = Descriptions.base.blog;
export const { metadata } = new SEO({
  title: 'Estarlincito | Blog',
  description,
  openGraph: { type: 'website', url: 'https://estarlincito.com/blog' },
  imagesUrl:
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  imagesAlt: 'Una macbook y una taza',
});

const BlogPage = () => {
  return (
    <>
      <BlogHeader title='Bienvenid@ a mi Blog' sumary={description} />
      <PostList posts={allBlogs} />
    </>
  );
};

export default BlogPage;
