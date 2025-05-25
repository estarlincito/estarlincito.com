import { Category } from '@app/imwriting/app/articles/[...slug]/pages/category';
import { SubCategory } from '@app/imwriting/app/articles/[...slug]/pages/subcategory';
import { ArticleContent } from '@app/imwriting/components/articles/content';
import { getArticles } from '@app/imwriting/lib/articles';
import type { Params } from '@app/imwriting/types/params';
import type { SearchParamsProps } from '@repo/types';
import { Container } from '@repo/ui/layouts/container';
import { notFound } from 'next/navigation';

interface Props extends SearchParamsProps {
  params: Promise<Params>;
}

export const generateMetadata = async (props: Props) => {
  const { params } = props;
  const { slug } = await params;
  const articlesData = getArticles(slug);

  if (!articlesData) notFound();

  const { articles, type } = articlesData;

  if (type === 'article') return articles[0].meta.article;
  if (type === 'category') return articles[0].meta.category;
  if (type === 'subCategory') return articles[0].meta.subcategory;
  return {};
};

const Page = async (props: Props) => {
  const { params, searchParams } = props;
  const searchParamsData = await searchParams;
  const { slug } = await params;
  if (slug.length >= 3) notFound();

  const articlesData = getArticles(slug);
  if (!articlesData) notFound();
  const { articles, type } = articlesData;

  return (
    <Container
    // className={cn('p-0', 'md:p-0')}
    // size={type === 'article' ? '3' : '4'}
    >
      {type === 'article' && <ArticleContent {...articles[0]} />}
      {type === 'category' && (
        <Category articles={articles} {...searchParamsData} />
      )}
      {type === 'subCategory' && (
        <SubCategory articles={articles} {...searchParamsData} />
      )}
    </Container>
  );
};

export default Page;
