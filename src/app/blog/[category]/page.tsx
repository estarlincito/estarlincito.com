import { notFound } from 'next/navigation';
import { getArticlesCategory } from '@/utils';
import { ArticleList, _Main } from '@UI/organisms';

type Props = {
  params: {
    category: string;
  };
};

export const generateMetadata = ({ params }: Props) => {
  const articles = getArticlesCategory(params.category);

  if (articles.length === 0) {
    return;
  }
  return {
    title: articles[0].category,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
  };
};

const CategoryPage: React.FC<Props> = ({ params }) => {
  const articles = getArticlesCategory(params.category);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <_Main>
      <ArticleList articles={articles} />
    </_Main>
  );
};

export default CategoryPage;
