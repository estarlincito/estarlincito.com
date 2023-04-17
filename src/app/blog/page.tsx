import { Blockquote, Title } from '@/components/HOC';
import { PostList, Maindoc } from '@/components/UI/organisms';
import clsx from 'clsx';
import { allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';

const title = 'Blog | Estarlincito';
const description =
  'Lee mis pensamientos sobre desarrollo de software, diseño web criptomonedas y mucho más.';
//SEO
export const metadata: Metadata = {
  title,
  description,
};

const BlogPage = () => {
  return (
    <Maindoc>
      <div className='flex flex-col items-center'>
        <div className='max-w-md text-center mb-16'>
          <Title text={title} size='text-4xl' />
          <p
            className={clsx(
              'mt-2 text-base',
              'text-neutral-600 dark:text-neutral-300'
            )}
          >
            {description}
          </p>
        </div>
      </div>
      <PostList posts={allBlogs} />
    </Maindoc>
  );
};

export default BlogPage;
