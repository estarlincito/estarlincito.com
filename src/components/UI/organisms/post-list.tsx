import { sortByDate } from '@/lib';
import { PostCard } from '../molecules';
import { Blog } from 'contentlayer/generated';

//Types
interface PostListProsp {
  posts: Blog[];
}

const PostList: React.FC<PostListProsp> = ({ posts }) => {
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
