// import { allServices } from '@repo/content/fixly/utils/service';
// import type { Locale } from '@repo/content/shared/locales';

// export const toTopics = (lang: Locale) => {
//   const seen = new Set();

//   return allServices[lang]
//     .filter(({ category }) => (seen.has(category) ? false : seen.add(category)))
//     .map(({ category, urls }) => ({
//       label: category,
//       route: urls.category,
//     }));
// };
