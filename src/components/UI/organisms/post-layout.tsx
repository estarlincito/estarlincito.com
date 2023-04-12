import { _Link, Title, Paragraph } from '@/components/HOC';
import { dateFormat } from '@/utils';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import { TbArrowBadgeRight, TbBrandGoogleHome } from 'react-icons/tb';
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
      <_Link href={href} target='_self' className='flex items-center'>
        {children}
      </_Link>
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
        'flex items-center gap-x-3 mb-3 select-none',
        'text-black/70 dark:text-white/70'
      )}
    >
      <Li href='/'>
        <TbBrandGoogleHome />
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
    <div className='mt-12 text-sm w-80'>
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
    </div>
  );
};

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
        <Nav
          category={category}
          subcategory={subcategory}
          slug_category={slug_category}
          slug_subcategory={slug_subcategory}
        />
        <Title className='text-2xl mb-3'>{teme}</Title>

        <PostMdx doc={body.code} />

        <Paragraph className='mt-8'>
          <b>Última actualización:</b> el&nbsp;
          <time dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
        </Paragraph>

        <Tags tags={tags} />
      </section>
    </Wrapper>
  );
};

export default PostLayout;
