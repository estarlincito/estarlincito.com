import { Imagedoc, Linkdoc } from '@/components/HOC';
import { dateFormat } from '@/utils';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';

const PostCard: React.FC<Blog> = ({
  teme,
  category,
  summary,
  cover,
  publishedAt,
  author,
  slug_post,
}) => {
  return (
    <div className="shadow-lg rounded-lg">
      <figure className="h-60">
        <Linkdoc href={slug_post} target="_self">
          <Imagedoc
            src={cover}
            alt={teme}
            className="rounded-t-lg w-full h-full"
          />

          {/* <div className=''>{summary}</div>
          <div className=''>{category}</div> */}
        </Linkdoc>
      </figure>

      <figcaption
        className={clsx(
          'grid grid-flow-row content-between h-28 p-5 gap-y-1',
          'rounded-b-lg',
          'bg-zinc-100 dark:bg-zinc-800'
        )}
      >
        <Linkdoc href={slug_post} target="_self" size="text-lg">
          {teme}
        </Linkdoc>

        <div
          className={clsx(
            'flex flex-row justify-between',
            'text-neutral-700 dark:text-neutral-400'
          )}
        >
          <h5>
            Por&nbsp;
            <Linkdoc href="/" target="_self">
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
