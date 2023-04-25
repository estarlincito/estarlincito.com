import { Post, dateFormat } from '@/lib';
import { notFound } from 'next/navigation';
import { PostLayout, Maindoc } from '@UI/organisms';
import { ParamsPost } from '@/types';

//SEO
export const generateMetadata = ({ params }: ParamsPost) => {
  const post = Post.getPost({ ...params });

  if (post === undefined) {
    return;
  }
  return {
    title: post.teme,
    icons: {
      icon: '/favicons/favicon.ico',
      shortcut: '/shortcut-icon.png',
    },

    openGraph: {
      title: post.teme,
      description: post.summary,
      url: `http://estarlincito.com/${post.slug_post}`,
      type: 'article',
      publishedTime: dateFormat(post.publishedAt),
      authors: post.author,
      images: [
        {
          url: post.cover,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

const postPage: React.FC<ParamsPost> = ({ params }) => {
  const post = Post.getPost({ ...params });

  if (post === undefined) {
    notFound();
  }

  return (
    <Maindoc>
      <PostLayout {...post} />
      {/* <aside></aside> */}
    </Maindoc>
  );
};

export default postPage;
