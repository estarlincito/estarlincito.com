import Imagedoc from '@/components/UI/image';
import dateFormat from '@/lib/dateFormat';
import { Flex, Link, Text } from '@radix-ui/themes';
import { Blog } from 'contentlayer/generated';
import Styled from './postcard.module.scss';

const PostCard = (props: Blog) => {
  return (
    <article className={Styled.postcard}>
      <figure>
        <Link href={props.urls.post} target='_self'>
          <Imagedoc src={props.cover} alt={props.title} />
        </Link>
      </figure>

      <figcaption>
        <Link
          href={props.urls.post}
          size='3'
          target='_self'
          weight='bold'
          color='gray'
        >
          {props.title}
        </Link>

        <Flex direction='row' justify='between'>
          <Text as='span'>
            Por&nbsp;
            <Link href='/' target='_self' color='gray' weight='bold'>
              {props.author}
            </Link>
          </Text>

          <time dateTime={props.publishedAt}>
            {dateFormat(props.publishedAt)}
          </time>
        </Flex>
      </figcaption>
    </article>
  );
};

export default PostCard;
