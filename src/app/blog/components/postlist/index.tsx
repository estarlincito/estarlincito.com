import sortByDate from '@/lib/sortDate';
import { Blog } from 'contentlayer/generated';
import PostCard from '../postcard';
import Styled from './postlist.module.scss';

interface PostListProps {
  posts: Blog[];
}

const PostList = ({ posts }: PostListProps) => {
  const _posts = sortByDate(posts);

  return (
    <ul className={Styled.postlist}>
      {_posts.map((post, id) => (
        <li key={id}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
