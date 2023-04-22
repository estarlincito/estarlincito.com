import { IconPlus, Linkdoc, Title } from '@/components/HOC';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import {
  TbArrowBadgeRight,
  TbBrandGoogleHome,
  TbClockFilled,
  TbDiscountCheckFilled,
  TbEyeFilled,
} from 'react-icons/tb';
import PostMdx from './post-mdx';
import Wrapper from './wrapper';

interface LiProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}
const Li: React.FC<LiProps> = ({ children, href, className }) => {
  return (
    <li className={className}>
      <Linkdoc
        href={href}
        target='_self'
        className='flex flex-row items-center gap-x-[1px]'
      >
        {children}
      </Linkdoc>
    </li>
  );
};

interface NavProps {
  category: string;
  subcategory: string;
  slug_category: string;
  slug_subcategory: string;
}

const Nav: React.FC<NavProps> = ({
  category,
  subcategory,
  slug_category,
  slug_subcategory,
}) => {
  return (
    <ul
      className={clsx(
        'text-sm flex items-center gap-x-3 select-none',
        'text-black/70 dark:text-white/70'
      )}
    >
      <Li href='/'>
        <TbBrandGoogleHome />
      </Li>

      <Li href='/blog'>
        <TbArrowBadgeRight />
        <span>Blog</span>
      </Li>

      <Li href={slug_category}>
        <TbArrowBadgeRight />
        <span>{category}</span>
      </Li>

      <Li href={slug_subcategory}>
        <TbArrowBadgeRight />
        <span>{subcategory}</span>
      </Li>
    </ul>
  );
};

interface TagsProps {
  tags: string[];
}
const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className='text-sm w-80 flex items-center'>
      <h5 className='font-bold'>Tags:</h5>
      <ul className='flex'>
        {tags.map((tag, id) => (
          <li key={id} className='m-1'>
            <Linkdoc
              href={`/blog/tags/${tag}`}
              target='_self'
              font='font-normal'
              className={clsx('text-sky-600', 'dark:text-sky-400')}
            >
              #{tag}
            </Linkdoc>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PostLayout: React.FC<Blog> = ({
  teme,
  category,
  subcategory,
  body,
  tags,
  check,
  author,
  avathar,
  cover,
  coverAlt,
  updated,
  readingTime,
  slug_category,
  slug_subcategory,
}) => {
  return (
    <Wrapper className='flex flex-col gap-y-5'>
      <Nav
        category={category}
        subcategory={subcategory}
        slug_category={slug_category}
        slug_subcategory={slug_subcategory}
      />

      <Title text={teme} size='text-2xl' />

      <ul className='flex flex-row gap-x-5'>
        {check === false ? (
          <IconPlus>
            <i className='text-sky-600 dark:text-sky-400'>
              <TbEyeFilled />
            </i>
            <span>En revisión</span>
          </IconPlus>
        ) : (
          <IconPlus>
            <i className='text-sky-600 dark:text-sky-400'>
              <TbDiscountCheckFilled />
            </i>
            <span>Verificado</span>
          </IconPlus>
        )}

        <IconPlus>
          <i className='text-slate-600 dark:text-slate-400'>
            <TbClockFilled />
          </i>
          <span>{readingTime}</span>
        </IconPlus>
      </ul>

      <PostMdx
        doc={body.code}
        author={author}
        avathar={avathar}
        cover={cover}
        coverAlt={coverAlt}
        updated={updated}
      />

      <Tags tags={tags} />
    </Wrapper>
  );
};

export default PostLayout;
