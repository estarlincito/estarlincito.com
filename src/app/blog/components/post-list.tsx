import sortByDate from '@/lib/sortDate';
import { Blog } from 'contentlayer/generated';
import PostCard from './post-card';

interface PostListProps {
  posts: Blog[];
}

const PostList = ({ posts }: PostListProps) => {
  const _posts = sortByDate(posts);

  return (
    <ul className='grid gap-5 justify-center grid-cols-[repeat(auto-fill,350px)]'>
      {_posts.map((post, id) => (
        <li key={id}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
