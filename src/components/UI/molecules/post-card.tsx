import { Imagedoc, Linkdoc } from '@/components/HOC';
import { Blog } from 'contentlayer/generated';
import { dateFormat } from '@/lib';
import clsx from 'clsx';

const PostCard: React.FC<Blog> = ({
  title,
  cover,
  publishedAt,
  author,
  urls,
}) => {
  return (
    <article className='shadow-lg rounded-lg w-[350px]'>
      <figure className='h-60'>
        <Linkdoc href={urls.post} target='_self'>
          <Imagedoc src={cover} alt={title} className='rounded-t-lg' />
        </Linkdoc>
      </figure>

      <figcaption
        className={clsx(
          'grid grid-flow-row content-between h-28 p-5 gap-y-1',
          'rounded-b-lg',
          'bg-zinc-100 dark:bg-zinc-800'
        )}
      >
        <Linkdoc href={urls.post} target='_self' size='text-lg'>
          {title}
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
              {author}
            </Linkdoc>
          </h5>
          <time dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
        </div>
      </figcaption>
    </article>
  );
};

export default PostCard;
