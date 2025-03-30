export type Slug = [
  { title: string; route: string },
  ...{ title: string; route: string }[],
];
