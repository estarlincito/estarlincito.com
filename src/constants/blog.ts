class Seo {
  static readonly title = 'Estarlincito | Blog';

  static readonly description =
    'Lee mis pensamientos sobre desarrollo de software, diseño web, criptomonedas y mucho más.';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/blog/',
  };

  static readonly imagesUrl =
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80';

  static readonly imagesAlt = 'Una macbook y una taza';
}

export default class Blog {
  static readonly seo = { ...Seo };
  static readonly titleH = 'Bienvenid@ a mi Blog';
}
