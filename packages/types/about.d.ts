export interface Sections {
  footer: string;
  header: {
    summary: string;
    title: string;
  };
  overview: {
    mission: string;
    title: string;
  };
  topics: {
    items: {
      label: string;
      value: string;
    }[];
    title: string;
  };
}
