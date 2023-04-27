import { CategoryPage, CategorySEO } from './category';
import { SubCategoryPage, SubCategorySEO } from './subcategory';
import { PostPage, postSEO } from './post';
import { notFound } from 'next/navigation';
import { ParamsProps, RenderProps } from '@/types';

const Render: RenderProps = ({ params }: ParamsProps) => {
  const { slug } = params;

  //Category Page
  if (slug.length === 1) {
    return {
      seo: CategorySEO(slug),
      page: <CategoryPage slug={slug} />,
    };
  }

  //subCategory Page
  if (slug.length === 2) {
    return {
      seo: SubCategorySEO(slug),
      page: <SubCategoryPage slug={slug} />,
    };
  }

  //Post Page
  if (slug.length === 3) {
    return {
      seo: postSEO(slug),
      page: <PostPage slug={slug} />,
    };
  }

  //No Fount
  if (slug.length > 3) {
    return {
      seo: null,
      page: notFound(),
    };
  }

  return {
    seo: null,
    page: null,
  };
};

//SEO
export const generateMetadata = ({ params }: ParamsProps) => {
  return Render({ params }).seo;
};

//Render Page
const SlugPage = ({ params }: ParamsProps) => {
  return Render({ params }).page;
};

export default SlugPage;
