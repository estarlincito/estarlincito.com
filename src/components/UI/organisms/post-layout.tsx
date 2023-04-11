import { _Link, Title, Paragraph } from '@/components/HOC';
import { dateFormat } from '@/utils';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import { TbArrowBadgeRight, TbBrandGoogleHome } from 'react-icons/tb';
import PostMdx from './post-mdx';
import Wrapper from './wrapper';

const PostLayout: React.FC<Blog> = ({
  teme,
  category,
  subcategory,
  body,
  tags,
  publishedAt,
  slug_category,
  slug_subcategory,
}) => {
  return (
    <Wrapper>
      <section>
        <div className='flex flex-row gap-5 select-none mb-3'>
          <_Link href='/' target='_self' className='flex items-center'>
            <TbBrandGoogleHome />
          </_Link>

          <_Link
            href={slug_category}
            target='_self'
            className={clsx(
              'text-sky-600',
              'dark:text-sky-400',
              'flex items-center'
            )}
          >
            <TbArrowBadgeRight />
            <span className='pl-2'>{category}</span>
          </_Link>

          <_Link
            href={slug_subcategory}
            target='_self'
            className={clsx(
              'text-sky-600',
              'dark:text-sky-400',
              'flex items-center'
            )}
          >
            <TbArrowBadgeRight />
            <span>{subcategory}</span>
          </_Link>
        </div>

        <Title className='text-3xl text-center mb-10'>{teme}</Title>

        <PostMdx doc={body.code} />

        <Paragraph className='mt-8'>
          <b>Última actualización:</b> el&nbsp;
          <time dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
        </Paragraph>
      </section>

      <section className='mt-12 text-sm w-80'>
        <h5 className='font-bold'>Tags:</h5>
        <ul className='flex'>
          {tags.map((tag, id) => (
            <li key={id} className='m-1'>
              <_Link
                href={`/blog/tags/${tag}`}
                target='_self'
                font='font-normal'
                className={clsx('text-sky-600', 'dark:text-sky-400')}
              >
                #{tag}
              </_Link>
            </li>
          ))}
        </ul>
      </section>
    </Wrapper>
  );
};

export default PostLayout;
