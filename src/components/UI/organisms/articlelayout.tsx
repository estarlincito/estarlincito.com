import { _Link, Title, Paragraph } from '@/components/HOC';
import { dateFormat } from '@/utils';
import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import ArticleMdx from './articlemdx';
import Wrapper from './wrapper';

const ArticleLayout: React.FC<Blog> = ({
  title,
  category,
  body,
  tags,
  publishedAt,
}) => {
  return (
    <Wrapper>
      <section>
        <p className='text-center uppercase tracking-wide select-none mb-3'>
          <_Link
            href={`/blog/${category.toLocaleLowerCase()}`}
            target='_self'
            font='font-normal'
            className={clsx('text-sky-600', 'dark:text-sky-400', 'text-sm')}
          >
            {category}
          </_Link>
        </p>

        <Title className='text-3xl text-center mb-10'>{title}</Title>

        <ArticleMdx doc={body.code} />

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

export default ArticleLayout;
