export type Slug_category = { category: string };
export type Slug_subcategory = { category: string; subcategory: string };
export type Slug_post = { category: string; subcategory: string; post: string };

export interface params_category {
  params: Slug_category;
}

export interface params_subcategory {
  params: Slug_subcategory;
}

export interface params_post {
  params: Slug_post;
}
