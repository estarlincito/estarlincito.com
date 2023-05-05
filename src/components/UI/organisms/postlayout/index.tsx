import { Imagedoc, Title } from '@/components/HOC';
import { Blog } from 'contentlayer/generated';
import Wrapper from '../wrapper';
import Author from './author';
import Check from './check';
import Nav from './nav';
import Origin from './origin';
import Post from './post';
import Tags from './tags';

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
  urls,
  origin,
}) => {
  return (
    <Wrapper className='flex flex-col gap-y-5'>
      <Nav
        className='-order-6'
        category={category}
        subcategory={subcategory}
        urlCat={urls.cat}
        urlSub={urls.sub}
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
      <Origin origin={origin} />
      <Tags tags={tags} />
      {/* <Comment /> */}
    </Wrapper>
  );
};

export default PostLayout;
