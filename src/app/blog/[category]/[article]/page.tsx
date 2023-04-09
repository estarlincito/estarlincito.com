import { getArticle } from '@/utils';
import { redirect } from 'next/navigation';
import { ArticleLayout, _Main } from '@UI/organisms';

type Props = {
  params: {
    category: string;
    article: string;
  };
};
//SEO
export const generateMetadata = ({ params }: Props) => {
  const article = getArticle(params.category, params.article);

  if (article === undefined) {
    return;
  }
  return {
    title: article.title,
    description: article.summary,
  };
};

const ArticlePage: React.FC<Props> = ({ params }) => {
  const article = getArticle(params.category, params.article);

  if (article === undefined) {
    redirect('/not-found');
  }

  return (
    <_Main>
      <ArticleLayout {...article} />
      {/* <aside></aside> */}
    </_Main>
  );
};

export default ArticlePage;
