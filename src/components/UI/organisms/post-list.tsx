import { sortByDate } from '@/utils';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import { PostCard } from '../molecules';

interface Prosp {
  posts: Blog[];
}

const PostList: React.FC<Prosp> = ({ posts }) => {
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
