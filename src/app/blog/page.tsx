import { PostList, Maindoc } from '@/components/UI/organisms';

import { allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';

//SEO
export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Lee mis pensamientos sobre desarrollo de software, diseño web criptomonedas y mucho más.',
};

const BlogPage = () => {
  return (
    <Maindoc>
      <PostList posts={allBlogs} />
    </Maindoc>
  );
};

export default BlogPage;
