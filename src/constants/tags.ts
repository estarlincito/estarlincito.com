class Seo {
  static readonly title = 'Estarlincito | Tags';

  static readonly description =
    'Desarrollo de tecnologías como HTML, CSS, JS, React, diseño atómico para mejorar la experiencia de usuario y más.';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/tags',
  };

  static readonly imagesUrl =
    'https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&const ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80';

  static readonly imagesAlt = 'imagen de palabras';
}

export default class Tags {
  static readonly seo = { ...Seo };
}
