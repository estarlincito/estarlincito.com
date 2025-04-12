import { Wrapper } from '@repo/ui';

import type { Params } from '@/types/params';

interface Props {
  params: Promise<Params>;
  searchParams: Promise<Record<string, string | undefined>>;
}

// export const generateMetadata = async (props) => {
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

const Page = async (props: Props) => {
  const { searchParams } = props;
  const { page } = await searchParams;
  // const { slug } = await params;
  // if (slug.length >= 3) notFound();

  // const posts = articles(slug);

  // if (!posts) notFound();
  // const { data, isPost, isCategory, isSubcategory } = posts;

  return (
    <Wrapper size='3'>
      {/* {isPost && <PostLayout {...data[0]} />}
      {isCategory && <Category data={data} page={page} />}
      {isSubcategory && <SubCategory data={data} page={page} />} */}
      {page}
    </Wrapper>
  );
};

export default Page;
