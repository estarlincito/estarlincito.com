import clsx from 'clsx';
import { Blog } from 'contentlayer/generated';
import { ArticleCard } from '../molecules';

interface Prosp {
  articles: Blog[];
}

const ArticleList: React.FC<Prosp> = ({ articles }) => {
  return (
    <ul
      className={clsx(
        'grid grid-cols-[repeat(auto-fill,350px)] gap-5 justify-center'
      )}
    >
      {articles.map((article) => (
        <li key={article._id} className=' '>
          <ArticleCard {...article} />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
