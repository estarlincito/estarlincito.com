import { _Link } from '@/components/HOC';
import { dateFormat } from '@/utils';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import Image from 'next/image';

const ArticleCard: React.FC<Blog> = ({
  title,
  category,
  summary,
  cover,
  coverWidth,
  coverHeight,
  publishedAt,
  author,
  slug,
}) => {
  return (
    <div className='bg-neutral-50 shadow-lg rounded-lg'>
      <figure className='h-44 xl:h-60'>
        <_Link href={slug} target='_self'>
          <Image
            src={cover}
            alt={title}
            width={parseInt(coverWidth)}
            height={parseInt(coverHeight)}
            className='rounded-t-lg w-full h-full'
          />

          {/* <div className=''>{summary}</div>
          <div className=''>{category}</div> */}
        </_Link>
      </figure>

      <figcaption
        className={clsx(
          'grid grid-flow-row content-between h-28 p-5 gap-y-1',
          'dark:text-black'
        )}
      >
        <_Link href={slug} target='_self' className='text-lg'>
          {title}
        </_Link>

        <div className='flex flex-row justify-between text-neutral-700'>
          <h5>
            Por&nbsp;
            <_Link href='/' target='_self'>
              {author}
            </_Link>
          </h5>
          <time dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
        </div>
      </figcaption>
    </div>
  );
};

export default ArticleCard;
