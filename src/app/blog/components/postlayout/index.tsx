import Imagedoc from '@/components/UI/imagedoc';
import Title from '@/components/UI/title';
import Wrapper from '@/components/wrapper';
import { Blog } from 'contentlayer/generated';
import Post from '../mdxcontent';
import Author from './author';
import Check from './check';
import Nav from './nav';
import Origin from './origin';
import Tags from './tags';

const PostLayout = (props: Blog) => {
  return (
    <Wrapper className='flex flex-col gap-y-5'>
      <Nav
        className='-order-6'
        category={props.category}
        subcategory={props.subcategory}
        urlCat={props.urls.cat}
        urlSub={props.urls.sub}
      />
      <Title className='-order-5' text={props.title} size='text-2xl' />
      <Check
        className='-order-4'
        check={props.check}
        readingTime={props.readingTime}
      />
      <Imagedoc
        className='-order-3 rounded-sm'
        src={props.cover}
        alt={props.coverAlt}
      />
      {/* BlockQuote -order-2 */}
      <Author
        className='-order-1'
        author={props.author}
        avathar={props.avathar}
        updated={props.updated}
      />
      <Post doc={props.body.code} />
      <Origin origin={props.origin} />
      <Tags tags={props.tags} />
      {/* <Comment /> */}
    </Wrapper>
  );
};

export default PostLayout;
