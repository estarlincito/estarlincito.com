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
    meta: 'Seguir siendo una buena persona',
    motivo: 'Sin importar lo que pase seguiré siendo auténtico y buena persona',
    id: 1,
  },
  {
    meta: 'Mejorar la confianza en mí mismo',
    motivo: 'Lo quiero hacer por amor propio',
    id: 2,
  },
  {
    meta: 'Seguir haciendo las cosas por mí',
    motivo: 'Es la única vía de salir adelante',
    id: 3,
  },

  {
    meta: 'Mi vida es una audaz aventura, o no es nada',
    motivo:
      'Avanza un pequeño paso cada día haciendo alguna de las pequeñas cosas que temes hacer. Tu miedo solo tiene un enorme poder sobre ti cuando no lo enfrentas. Aprende a usas el poder del amor y la bondad para vencerlo',
    id: 4,
  },
  {
    meta: 'No te quiero para mí, te quiero conmigo',
    motivo:
      'El amor no es posesión, es la unión de dos personas completamente distintas, o con algunos puntos en común, que se aceptan tal y como son',
    id: 5,
  },
  {
    meta: 'Seguir cultivando la aceptación',
    motivo:
      'Acepta. No es resignación, pero nada te hace perder más energía que el resistir y pelear por una situación que no puedes cambiar -Dalai Lama-',
    id: 6,
  },
  {
    meta: 'Mejorar la gramática de mí inglés',
    motivo: 'Quiero hacerlo para conseguir un empleo de dev',
    id: 7,
  },
  {
    meta: 'Vivir acorde al presente 💖💖💖💖',
    motivo:
      'No te detengas en el pasado, no sueñes con el futuro, concentra la mente en el presente',
    id: 8,
  },
];

export default class Metas {
  static readonly seo = { ...Seo };
  static readonly metas = metas;
}
