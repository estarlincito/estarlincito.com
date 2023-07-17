class Seo {
  static readonly title = 'Estarlincito | Metas';

  static readonly description = 'Motivado para cumplir mis metas';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/metas/',
  };

  static readonly imagesUrl =
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80';

  static readonly imagesAlt =
    'white ceramic mug with coffee on top of a planner';
}

const metas = [
  {
    meta: 'Mejorar la gramática de mí inglés',
    motivo: 'Quiero hacerlo para conseguir un empleo de dev',
    id: 0,
  },
  {
    meta: 'Mejorar la confianza en mí mismo',
    motivo: 'Lo quiero hacer por amor propio',
    id: 1,
  },
  {
    meta: 'Seguir haciendo las cosas por mí',
    motivo: 'Es la única vía de salir adelante',
    id: 2,
  },
];

export default class MetasC {
  static readonly seo = { ...Seo };
  static readonly metas = metas;
}
