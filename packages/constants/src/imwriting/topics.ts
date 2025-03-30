import { ArrayUtils, ObjectUtils } from '@estarlincito/utils';

interface Links {
  route: string;
  label: string;
  target?: '_blank' | '_self';
}

interface Topics {
  catlinks: Links[];
  sublinks: Links[];
  alllinks: Links[];
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

export const topics = (allArticles: AllArticles[]): Topics => {
  //categories
  const categories = ArrayUtils.getUniqueByKey(
    allArticles,
    'category',
    'meta:pathnames:category',
  );

  const catlinks = categories.map((item) => {
    return {
      label: item['category'],
      route: item['meta:pathnames:category'],
    };
  });

  //subcategory
  const subCategories = ArrayUtils.getUniqueByKey(
    allArticles,
    'subcategory',
    'meta:pathnames:subcategory',
  );

  const sublinks = subCategories.map((item) => {
    return {
      label: item['subcategory'],
      route: item['meta:pathnames:subcategory'],
    };
  });

  //alllinks
  const alllinks: Links[] = [...catlinks, ...sublinks];

  return ObjectUtils.freeze({
    alllinks,
    catlinks,
    sublinks,
  });
};
