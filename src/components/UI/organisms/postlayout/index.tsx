import { Imagedoc, Title } from '@/components/HOC';
import { Blog } from 'contentlayer/generated';
import Wrapper from '../wrapper';
import Author from './author';
import Check from './check';
import Post from './post';
import Tags from './tags';
import Nav from './nav';

const PostLayout: React.FC<Blog> = ({
  title,
  category,
  subcategory,
  body,
  tags,
  check,
  author,
  avathar,
  cover,
  coverAlt,
  updated,
  readingTime,
  slug_category,
  slug_subcategory,
}) => {
  return (
    <Wrapper className='flex flex-col gap-y-5'>
      <Nav
        category={category}
        subcategory={subcategory}
        slug_category={slug_category}
        slug_subcategory={slug_subcategory}
      />
      <Title text={title} size='text-2xl' />
      <Check check={check} readingTime={readingTime} />
      <Imagedoc src={cover} alt={coverAlt} />
      <Author author={author} avathar={avathar} updated={updated} />
      <Post doc={body.code} />
      <Tags tags={tags} />
      {/* <Comment /> */}
    </Wrapper>
  );
};

export default PostLayout;
