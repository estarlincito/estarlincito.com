import Imagedoc from '@/components/UI/imagedoc';
import dateFormat from '@/lib/dateFormat';
import { Link } from '@radix-ui/themes';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';

const PostCard = (props: Blog) => {
  return (
    <article className='shadow-lg rounded-lg w-[350px]'>
      <figure className='h-60'>
        <Link href={props.urls.post} target='_self'>
          <Imagedoc
            src={props.cover}
            alt={props.title}
            className='rounded-t-lg'
          />
        </Link>
      </figure>

      <figcaption
        className={clsx(
          'grid grid-flow-row content-between h-28 p-5 gap-y-1',
          'rounded-b-lg'
        )}
      >
        <Link
          href={props.urls.post}
          size='3'
          target='_self'
          weight='bold'
          color='gray'
        >
          {props.title}
        </Link>

        <div className={clsx('flex flex-row justify-between')}>
          <h5>
            Por&nbsp;
            <Link href='/' target='_self' color='gray' weight='bold'>
              {props.author}
            </Link>
          </h5>
          <time dateTime={props.publishedAt}>
            {dateFormat(props.publishedAt)}
          </time>
        </div>
      </figcaption>
    </article>
  );
};

export default PostCard;
