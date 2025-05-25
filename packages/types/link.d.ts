export type LinkType = {
  route?: string;
  label?: string;
  key?: number;
};

export type LinksType = [LinkType, ...LinkType[]];
