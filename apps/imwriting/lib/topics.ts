import { ArrayUtils, ObjectUtils } from '@estarlincito/utils';
import { addingKey } from '@repo/lib/adding-key';
import type { LinksType } from '@repo/types';

interface Topics {
  catlinks: LinksType;
  sublinks: LinksType;
  alllinks: LinksType;
}

interface AllArticles {
  category: string;
  meta: {
    pathnames: {
      category: string;
      subcategory: string;
    };
  };
  subcategory: string;
}

export const getTopics = (allArticles: AllArticles[]): Readonly<Topics> => {
  // categories
  const categories = ArrayUtils.getUniqueByKey(
    allArticles,
    'category',
    'meta:pathnames:category',
  );

  const catlinks = addingKey(
    categories.map((item) => ({
      label: item['category'],
      route: item['meta:pathnames:category'],
    })),
  ) as LinksType;

  // subcategory
  const subCategories = ArrayUtils.getUniqueByKey(
    allArticles,
    'subcategory',
    'meta:pathnames:subcategory',
  );

  const sublinks = addingKey(
    subCategories.map((item) => ({
      label: item['subcategory'],
      route: item['meta:pathnames:subcategory'],
    })),
  ) as LinksType;

  // alllinks
  const alllinks = [...catlinks, ...sublinks] as LinksType;

  return ObjectUtils.freeze({
    alllinks,
    catlinks,
    sublinks,
  });
};
