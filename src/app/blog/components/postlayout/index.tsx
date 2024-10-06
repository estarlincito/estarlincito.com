import Wrapper from '@/components/wrapper';
import { Heading } from '@radix-ui/themes';
import Imagen from '@UI/image';
import { Blog } from 'contentlayer/generated';
import Post from '../mdxcontent';
import Author from './author';
import Check from './check';
import Nav from './nav';
import Share from './share';

const PostLayout = (props: Blog) => {
  return (
    <Wrapper align='start'>
      <Nav
        category={props.category}
        subcategory={props.subcategory}
        urlCat={props.urls.cat}
        urlSub={props.urls.sub}
      />

      <Heading size='8'>{props.title}</Heading>
      <Check check={props.check} readingTime={props.readingTime} />
      <Imagen src={props.cover} alt={props.coverAlt} />

      <Author
        author={props.author}
        avathar={props.avathar}
        updated={props.updated}
      />

      <Post doc={props.body.code} />

      <Share
        category={props.category}
        summary={props.summary}
        url={props.urls.post}
      />
    </Wrapper>
  );
};

export default PostLayout;
