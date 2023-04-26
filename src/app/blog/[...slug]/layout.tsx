import { Slug } from '@/types';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
interface Props {
  category: ReactNode;
  subcategory: ReactNode;
  post: ReactNode;
  params: { slug: Slug[] };
}

const SlugLayout: React.FC<Props> = ({
  category,
  subcategory,
  post,
  params: { slug },
}) => {
  if (slug.length > 3) {
    notFound();
  }
  if (slug.length === 1) {
    return <>{category}</>;
  }
  if (slug.length === 2) {
    return <>{subcategory}</>;
  }
  if (slug.length === 3) {
    return <>{post}</>;
  }

  return <></>;
};

export default SlugLayout;
