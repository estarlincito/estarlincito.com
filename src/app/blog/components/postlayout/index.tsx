import Imagedoc from '@/components/UI/imagedoc';
import Wrapper from '@/components/wrapper';
import { Heading } from '@radix-ui/themes';
import { Blog } from 'contentlayer/generated';
import Post from '../mdxcontent';
import Author from './author';
import Check from './check';
import Nav from './nav';
import Origin from './origin';
import Tags from './tags';

const PostLayout = (props: Blog) => {
  return (
    <Wrapper>
      <Nav
        className='-order-6'
        category={props.category}
        subcategory={props.subcategory}
        urlCat={props.urls.cat}
        urlSub={props.urls.sub}
      />

      <Heading size='7' className='-order-5'>
        {props.title}
      </Heading>

      <Check
        className='-order-4'
        check={props.check}
        readingTime={props.readingTime}
      />

      <Imagedoc
        className='-order-3 rounded-lg'
        src={props.cover}
        alt={props.coverAlt}
      />

      <Author
        className='-order-1'
        author={props.author}
        avathar={props.avathar}
        updated={props.updated}
      />

      <Post doc={props.body.code} />
      <Origin origin={props.origin} />
      <Tags tags={props.tags} />
    </Wrapper>
  );
};

export default PostLayout;
