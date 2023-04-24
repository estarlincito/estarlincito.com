import { sortByDate } from '@/lib';
import clsx from 'clsx';
import { PostCard } from '../molecules';
import { PostListProsp } from '@/types';

const PostList: React.FC<PostListProsp> = ({ posts }) => {
  const _posts = sortByDate(posts);

  return (
    <ul
      className={clsx(
        'grid grid-cols-[repeat(auto-fill,350px)] gap-5 justify-center'
      )}
    >
      {_posts.map((post, id) => (
        <li key={id}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
