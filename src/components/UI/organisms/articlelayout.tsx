import { _Link, Title } from '@/components/HOC';
import { Blog } from 'contentlayer/generated';
import ArticleMdx from './articlemdx';
import Wrapper from './wrapper';

const ArticleLayout = ({ article }: { article: Blog }) => {
  const { title, category, body, tags } = article;
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

        {/* **Última actualización:** el 24 de marzo del 2023. (de manera dinamica) */}
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
