class Seo {
  static readonly title = 'Estarlincito | Me';

  static readonly description = 'Principios para conservar mi amor propio.';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/me/',
  };

  static readonly imagesUrl =
    'https://images.unsplash.com/photo-1534413298607-48ba59e8a06d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80';

  static readonly imagesAlt =
    'Go wild for this moment. Be happy for this moment. This moment is your life';
}

const me = [
  {
    principio: 'No ser el amante de nadie',
    razon: 'Porque soy una persona valiosa y merezco mucho más que migajas.',
    id: 1,
  },
];

export default class Me {
  static readonly seo = { ...Seo };
  static readonly me = me;
}
