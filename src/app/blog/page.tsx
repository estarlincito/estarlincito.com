import { PostList, _Main } from '@/components/UI/organisms';
import { allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';

//SEO
export const metadata: Metadata = {
  title: 'Blog | Estarlincito',
  description:
    'Lee mis pensamientos sobre desarrollo de software, diseño web criptomonedas y mucho más.',
};

const BlogPage = () => {
  return (
    <_Main>
      <PostList posts={allBlogs} />
    </_Main>
  );
};

export default BlogPage;
