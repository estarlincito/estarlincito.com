import { _Link } from '@/components/HOC';
import { setFormat } from '@/utils';
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

      <figcaption className='flex flex-col p-5 dark:text-black h-32'>
        <_Link href={slug} target='_self' className='text-lg'>
          {title}
        </_Link>
        <div className='text-sm flex justify-between mt-5'>
          <h5>
            Por{' '}
            <_Link href='/' target='_self'>
              {author}
            </_Link>
          </h5>
          <time dateTime={publishedAt}>{setFormat(publishedAt)}</time>
        </div>
      </figcaption>
    </div>
  );
};

export default ArticleCard;
