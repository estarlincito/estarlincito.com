import Imagedoc from '@/components/UI/imagedoc';
import Linkdoc from '@/components/UI/linkdoc';
import dateFormat from '@/lib/dateFormat';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';

const PostCard = (props: Blog) => {
  return (
    <article className='shadow-lg rounded-lg w-[350px]'>
      <figure className='h-60'>
        <Linkdoc href={props.urls.post} target='_self'>
          <Imagedoc
            src={props.cover}
            alt={props.title}
            className='rounded-t-lg'
          />
        </Linkdoc>
      </figure>

      <figcaption
        className={clsx(
          'grid grid-flow-row content-between h-28 p-5 gap-y-1',
          'rounded-b-lg',
          'bg-zinc-100 dark:bg-zinc-800'
        )}
      >
        <Linkdoc href={props.urls.post} target='_self' size='text-lg'>
          {props.title}
        </Linkdoc>

        <div
          className={clsx(
            'flex flex-row justify-between',
            'text-neutral-700 dark:text-neutral-300'
          )}
        >
          <h5>
            Por&nbsp;
            <Linkdoc href='/' target='_self'>
              {props.author}
            </Linkdoc>
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
