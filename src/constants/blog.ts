class Seo {
  static readonly title = 'Estarlincito | Blog';

  static readonly description =
    'Dive into my psychological reflections as we explore the fascinating world of software development, web design, cryptocurrencies, and much more.';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/blog/',
  };

  static readonly image_url =
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80';

  static readonly image_alt = 'A MacBook and a mug.';
}

export default class Blog {
  static readonly seo = { ...Seo };
  static readonly titleH = 'Welcome to my blog!';
}
