export interface SearchParams {
  offset?: string;
  limit?: string;
}

export interface SearchParamsProps {
  searchParams: Promise<SearchParams>;
}
