import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import { ArticleCard } from '../molecules';

interface Prosp {
  articles: Blog[];
  justify?: string;
}

const ArticleList: React.FC<Prosp> = ({ articles, justify }) => {
  return (
    <ul className={clsx('flex flex-wrap', justify && justify)}>
      {articles.map((article) => (
        <li key={article._id} className='w-96 md:basis-1/2 lg:basis-1/3 p-3'>
          <ArticleCard {...article} />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
