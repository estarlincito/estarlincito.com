import { PostList, Maindoc } from '@/components/UI/organisms';

import { allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';
const title = 'Blog';
//SEO
export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    description:
      'Lee mis pensamientos sobre desarrollo de software, diseño web criptomonedas y mucho más.',
    url: 'estarlincito.com/blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        width: 800,
        height: 600,
      },
      {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        width: 1800,
        height: 1600,
        alt: 'logo',
      },
    ],
  },
};

const BlogPage = () => {
  return (
    <Maindoc>
      <PostList posts={allBlogs} />
    </Maindoc>
  );
};

export default BlogPage;
