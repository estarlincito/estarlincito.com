// export const generateStaticParams = () =>
//   const categories = await getAllCategories(); // e.g. ['culture', 'science']
//   const subcategories = await getAllSubcategories(); // e.g. [{ parent: 'culture', slug: 'stories' }, …]
//   const questions = await getAllQuestions(); // e.g. ['the-seeds-of-belief', …]

import { Container } from '@repo/ui/layouts/container';

//   const params = [];

//   // 1. index: /questions
//   params.push({ slug: [] });

//   // 2. cat: /questions/culture
//   for (const cat of categories) {
//     params.push({ slug: [cat] });
//   }

//   // 3. sub: /questions/culture/stories
//   for (const { parent, slug } of subcategories) {
//     params.push({ slug: [parent, slug] });
//   }

//   // 4. preguntas: /questions/the-seeds-of-belief
//   for (const q of questions) {
//     params.push({ slug: [q] });
//   }

//   return params;

const Page = () => <Container>Render Category - Sub - Question</Container>;

export default Page;
