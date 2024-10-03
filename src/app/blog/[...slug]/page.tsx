import Container from '@/components/container';
import get_posts from '@/lib/post/get-posts';
import get_sub from '@/lib/post/get-sub';
import { Params } from '@/types/params';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import BlogHeader from '../components/blog-header';
import PostLayout from '../components/postlayout';
import PostList from '../components/postlist';

interface Props {
  params: Params;
}

export const generateMetadata = ({ params }: Props) => {
  const { slug } = params;

  //Firts params
  if (slug.length === 1) {
    const posts = get_posts(slug);

    if (posts === undefined) {
      notFound();
    }

    const { data } = posts;
    const { metadata } = posts;

    //POST
    if (slug[0] === data[0].urls.post.replace('/blog/', '')) {
      return metadata;
    }

    //CAT
    else if (slug[0] === data[0].urls.cat.replace('/blog/', '')) {
      return metadata;
    }
  }

  //Second params
  if (slug.length === 2) {
    const posts = get_sub(slug);

    if (posts === undefined) {
      notFound();
    }

    const { metadata } = posts;
    return metadata;
  }
};

const PostPage = ({ params }: Props) => {
  const { slug } = params;

  //Firts params
  if (slug.length === 1) {
    const posts = get_posts(slug);

    if (posts === undefined) {
      notFound();
    }

    const { data } = posts;

    //POST
    if (slug[0] === data[0].urls.post.replace('/blog/', '')) {
      return (
        <Container size='3'>
          <Suspense fallback={<></>}>
            <PostLayout {...data[0]} />
          </Suspense>
        </Container>
      );
    }

    //CAT
    else if (slug[0] === data[0].urls.cat.replace('/blog/', '')) {
      const { description } = data[0].blogseo.cat;
      return (
        <Container size='4'>
          <BlogHeader title={data[0].category} sumary={description} />
          <Suspense fallback={<></>}>
            <PostList posts={data} />
          </Suspense>
        </Container>
      );
    }
  }

  //Second params
  if (slug.length === 2) {
    const posts = get_sub(slug);

    if (posts === undefined) {
      notFound();
    }

    const { data } = posts;
    const { description } = data[0].blogseo.sub;

    return (
      <Container size='4'>
        <BlogHeader title={data[0].subcategory} sumary={description} />
        <Suspense fallback={<></>}>
          <PostList posts={data} />
        </Suspense>
      </Container>
    );
  }
  //third params not found
  else {
    notFound();
  }
};

export default PostPage;
