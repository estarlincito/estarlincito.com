import type { Slug } from '@app/imwriting/types/params';
import { allArticles, type Articles } from 'contentlayer/generated';
type Type = 'article' | 'category' | 'subCategory';

export const getArticles = (slug: Slug) => {
  if (!slug.length) return null;
  const segment1 = `/articles/${slug[0]}`;
  const segment2 = slug.length === 2 ? `${segment1}/${slug[1]}` : '';

  let type = 'article' as Type;

  const articles = allArticles.filter(({ meta: { pathnames } }: Articles) => {
    const isArticle = pathnames.article === segment1;
    const isCategory = pathnames.category === segment1 && slug.length === 1;
    const isSubCategory =
      pathnames.subcategory === segment2 && slug.length === 2;

    if (isArticle) type = 'article';
    else if (isCategory) type = 'category';
    else if (isSubCategory) type = 'subCategory';

    return isArticle || isCategory || isSubCategory;
  });

  return articles.length
    ? ({ articles, type } as unknown as {
        articles: [Articles, ...Articles[]];
        type: Type;
      })
    : null;
};
