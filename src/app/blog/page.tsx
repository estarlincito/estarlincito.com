import { PostList, Maindoc } from '@/components/UI/organisms';
import { setMetadata } from '@/lib';
import { allBlogs } from 'contentlayer/generated';

//SEO
export const metadata = setMetadata({
  title: 'Blog',
  description:
    'Lee mis pensamientos sobre desarrollo de software, diseño web criptomonedas y mucho más.',
  appUrl: 'https://estarlincito.com/blog',
  imageUrl:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'",
  imageAlt: 'Una macbook y una taza',
});

const BlogPage = () => {
  return (
    <Maindoc>
      <PostList posts={allBlogs} />
    </Maindoc>
  );
};

export default BlogPage;
