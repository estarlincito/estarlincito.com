import { getArticleCategory } from '@/utils';
import { redirect } from 'next/navigation';
import { ArticleList, Container } from '@UI/organisms';
import clsx from 'clsx';

type Props = {
  params: {
    category: string;
  };
};

export const generateMetadata = ({ params }: Props) => {
  const articles = getArticleCategory(params.category);

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
  const articles = getArticleCategory(params.category);

  if (articles.length === 0) {
    redirect('/not-found');
  }

  return (
    <Container>
      <ArticleList
        articles={articles}
        justify={clsx(
          'justify-center',
          articles.length > 1 && 'md:justify-between'
        )}
      />
    </Container>
  );
};

export default CategoryPage;
