import { Linkdoc } from '@/components/HOC';
import { dateFormat } from '@/utils';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import Image from 'next/image';

const PostCard: React.FC<Blog> = ({
  teme,
  category,
  summary,
  cover,
  coverWidth,
  coverHeight,
  publishedAt,
  author,
  slug_post,
}) => {
  return (
    <div className='bg-neutral-50 shadow-lg rounded-lg'>
      <figure className='h-44 xl:h-60'>
        <Linkdoc href={slug_post} target='_self'>
          <Image
            src={cover}
            alt={teme}
            width={parseInt(coverWidth)}
            height={parseInt(coverHeight)}
            className='rounded-t-lg w-full h-full'
          />

          {/* <div className=''>{summary}</div>
          <div className=''>{category}</div> */}
        </Linkdoc>
      </figure>

      <figcaption
        className={clsx(
          'grid grid-flow-row content-between h-28 p-5 gap-y-1',
          'dark:text-black'
        )}
      >
        <Linkdoc href={slug_post} target='_self' size='text-lg'>
          {teme}
        </Linkdoc>

        <div className='flex flex-row justify-between text-neutral-700'>
          <h5>
            Por&nbsp;
            <Linkdoc href='/' target='_self'>
              {author}
            </Linkdoc>
          </h5>
          <time dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
        </div>
      </figcaption>
    </div>
  );
};

export default PostCard;
