import { Container } from '@repo/ui';
import React from 'react';

import { Params } from '@/types/params';

interface Props {
  params: Promise<Params>;
  searchParams: Promise<Record<string, string | undefined>>;
}

// type Gmetadata = (props: Props) => Promise<Metadata>;

// export const generateMetadata: Gmetadata = async (props) => {
//   const { params } = props;
//   const { slug } = await params;
//   const posts = articles(slug);

//   if (!posts) notFound();

//   const { isPost, isCategory, isSubcategory, metadata } = posts;

//   if (isPost) return metadata;
//   if (isCategory) return metadata;
//   if (isSubcategory) return metadata;
//   return {};
// };

const Page: React.FC<Props> = async (props) => {
  const { searchParams } = props;
  const { page } = await searchParams;
  // const { slug } = await params;
  // if (slug.length >= 3) notFound();

  // const posts = articles(slug);

  // if (!posts) notFound();
  // const { data, isPost, isCategory, isSubcategory } = posts;

  return (
    <Container size='3'>
      {/* {isPost && <PostLayout {...data[0]} />}
      {isCategory && <Category data={data} page={page} />}
      {isSubcategory && <SubCategory data={data} page={page} />} */}
      {page}
    </Container>
  );
};

export default Page;
