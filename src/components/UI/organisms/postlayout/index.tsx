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
        className='-order-6'
        category={category}
        subcategory={subcategory}
        slug_category={slug_category}
        slug_subcategory={slug_subcategory}
      />
      <Title className='-order-5' text={title} size='text-2xl' />
      <Check className='-order-4' check={check} readingTime={readingTime} />
      <Imagedoc className='-order-3' src={cover} alt={coverAlt} />
      {/* BlockQuote -order-2 */}
      <Author
        className='-order-1'
        author={author}
        avathar={avathar}
        updated={updated}
      />

      <Post doc={body.code} />
      <Tags tags={tags} />
      {/* <Comment /> */}
    </Wrapper>
  );
};

export default PostLayout;
