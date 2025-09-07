// import { addingKey } from '@repo/utils/adding-key';
// import type { LinksType } from '@repo/types';
// export const toLink = <T extends Record<string, string>>(linkData: T) => {
//   type Labels = keyof T;

//   const data = Object.entries(linkData).reduce(
//     (acc, [label, route]) => ({
//       ...acc,
//       [label as Labels]: { label: label as Labels, route },
//     }),
//     {} as Record<Labels, { label: Labels; route: string }>,
//   );

//   const allLinks = Object.entries(linkData).map(([label, route]) => ({
//     label,
//     route,
//   }));

//   return Object.freeze({
//     ...data,
//     allLinks: addingKey(allLinks) as unknown as LinksType,
//   });
// };
