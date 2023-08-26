class Seo {
  static readonly title = 'Estarlincito | Me';

  static readonly description = 'Consejos para vivir en el momento presente';

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
    consejo: '¿Hay alegría, facilidad y liviandad en lo que hago?',
    razon:
      'Si no las hay, entonces el tiempo está ocultando el momento presente, y la vida se percibe como una carga o un esfuerzo.',
    id: 1,
  },

  {
    consejo: 'Todos los problemas son iluciones de la mente',
    razon:
      'En últimas, no se trata de resolver sus problemas. Se trata de darse cuenta de que no hay problemas. Sólo situaciones que manejar o que dejar así y aceptar como parte de la condición de ser del momento presente hasta que cambien o se puedan manejar. Los problemas son creados por la mente y necesitan el tiempo para sobrevivir.',
    id: 2,
  },
];

export default class Me {
  static readonly seo = { ...Seo };
  static readonly me = me;
}
