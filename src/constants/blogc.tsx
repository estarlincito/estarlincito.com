const openGraph = (cat: string) => {
  return {
    type: 'website',
    url: `https://estarlincito.com/blog/${cat}`,
  };
};

const title = (comp: string) => {
  return 'Estarlincito | ' + comp;
};

export default class Blogc {
  static readonly seo = { title, openGraph };
}
