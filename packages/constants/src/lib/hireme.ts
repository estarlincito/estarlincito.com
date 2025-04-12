import { addingKey } from '@repo/lib';

export const toHireme = <T extends Record<string, string>>(linkData: T) => {
  type Labels = keyof T;

  const data = Object.entries(linkData).reduce(
    (acc, [label, route]) => ({
      ...acc,
      [label as Labels]: { label: label as Labels, route },
    }),
    {} as Record<Labels, { label: Labels; route: string }>,
  );

  const allLinks = Object.entries(linkData).map(([label, route]) => ({
    label: label as Labels,
    route,
  }));

  return Object.freeze({ ...data, allLinks: addingKey(allLinks) });
};
