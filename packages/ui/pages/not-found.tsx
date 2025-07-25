// import {
//   // loadTranslations,
//   getTranslations,
//   type Locale,
//   type LocalesParams,
//   // type Translations,
// } from '@repo/content/estarlincito/locales';
// // import { GenerateMetadata } from '@estarlincito/utils';
// import { Heading } from '@repo/ui/components/heading';
// import { Markdown } from '@repo/ui/components/markdown';
// import { Flex } from '@repo/ui/layouts/flex';

// // interface Meta {
// //   title: string;
// //   description: string;
// //   locale: string;
// //   siteName: string;
// //   url: string;
// //   path: string;
// // }

// // export const meta = ({
// //   locale,
// //   siteName,
// //   url,
// //   title,
// //   path,
// //   description,
// // }: Meta) =>
// //   GenerateMetadata.website({
// //     description,
// //     images: [
// //       {
// //         alt: 'Page not found cover',
// //         url: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png',
// //       },
// //     ],
// //     locale,
// //     siteName,
// //     title,
// //     url: `${url}/${path}`,
// //   });

// // export const NotFound = ({ body, title }: Translations['not-found']) => (
// //   <Flex className='justify-center items-center'>
// //     <Flex className='max-w-80 flex-col gap-y-2'>
// //       <Heading content={title} />

// //       <Markdown className='text-2xl' content={body} />
// //     </Flex>
// //   </Flex>
// // );

// export const CatchAll = async ({ params }: LocalesParams) => {
//   const { lng } = await params;
//   const t = getTranslations(lng);

//   return (
//     <Flex className='justify-center items-center'>
//       <Flex className='max-w-80 flex-col gap-y-2'>
//         <Heading content={t('not-found.title')} />

//         <Markdown className='text-2xl' content={t('not-found.body')} />
//       </Flex>
//     </Flex>
//   );
// };
