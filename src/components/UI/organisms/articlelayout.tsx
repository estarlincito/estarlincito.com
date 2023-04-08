import { _Link, Title, Paragraph } from '@/components/HOC';
import { setFormat } from '@/utils';
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
          <_Link href={`/blog/${category.toLocaleLowerCase()}`} target='_self'>
            {category}
          </_Link>
        </p>

        <Title className='text-3xl text-center mb-10'>{title}</Title>

        <ArticleMdx doc={body.code} />

        <Paragraph className='my-5'>
          <b>Última actualización:</b> el{' '}
          <time dateTime={publishedAt}>{setFormat(publishedAt)}</time>
        </Paragraph>
      </section>

      <section className='mt-12 text-sm w-80'>
        <h5 className='font-bold'>Tags:</h5>
        <ul className='flex'>
          {tags.map((tag, id) => (
            <li key={id} className='m-1'>
              <_Link href={`/blog/tags/${tag}`} target='_self'>
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
