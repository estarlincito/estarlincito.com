import sortByDate from '@/lib/sortDate';
import { Box, Grid } from '@radix-ui/themes';
import { Blog } from 'contentlayer/generated';
import PostCard from '../postcard';

interface PostListProps {
  posts: Blog[];
}

const PostList = ({ posts }: PostListProps) => {
  const _posts = sortByDate(posts);

  return (
    <Grid gap='1.25rem' justify='center' columns={'repeat(auto-fill, 350px)'}>
      {_posts.map((post, id) => (
        <Box as='div' key={id}>
          <PostCard {...post} />
        </Box>
      ))}
    </Grid>
  );
};

export default PostList;
