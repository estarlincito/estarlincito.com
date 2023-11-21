const F = (description: string, imagesUrl: string, imagesAlt: string) => {
  return {
    description,
    imagesUrl,
    imagesAlt,
  };
};

class Doc {
  static readonly Filosofía = F(
    'Si estás buscando algo que te inspire y te ayude a reflexionar sobre tu vida y tu entorno, ¡éste es tu lugar!',
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'Lote de libros en un estante de madera'
  );

  static readonly 'Filosofía de la religión' = F(
    'Esta sección está dedicada a explorar los temas filosóficos relacionados con la religión y sus implicaciones.',
    'https://images.unsplash.com/photo-1586187672953-a000e463fce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    'Silueta de palmeras durante la puesta de sol'
  );

  static readonly 'Filosofía de la vida y la espiritualidad' = F(
    'Busca sentido, conexión divina y reflexiona sobre la conciencia, moralidad y armonía. ',
    'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'decoración colgante lear en varios colores'
  );

  static readonly Finanzas = F(
    'Espero que encuentres toda la información que necesitas para tomar decisiones inteligentes sobre tus finanzas.',
    'https://images.unsplash.com/photo-1634474588578-7f0565a1cea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'Un hombre con traje escribiendo en una tableta'
  );

  static readonly 'Finanzas Personales' = F(
    'Aquí encontrarás consejos útiles sobre cómo administrar tus finanzas y cómo alcanzar tus objetivos financieros.',
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    'Black Android smartphone'
  );

  static readonly 'Psicología' = F(
    'Aquí encontrarás información útil sobre temas como el bienestar emocional, el desarrollo personal y la salud mental.',
    'https://images.unsplash.com/photo-1586807480822-0e95ba6666ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'Personas que forman el corazón a mano'
  );

  static readonly 'Psicología crítica' = F(
    'Estoy muy contento de que hayas llegado hasta aquí. Espero que encuentres información útil y valiosa sobre la psicología crítica.',
    'https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'Mujer con camisa negra de manga larga usando macbook'
  );

  static readonly 'Psicología positiva' = F(
    'Aquí encontrarás información sobre cómo vivir de forma más saludable y feliz, y cómo aprovechar al máximo tu mente y tu cuerpo.',
    'https://images.unsplash.com/photo-1608055997373-383bebd42f41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'Mujer relajada, sosteniendo un teléfono móvil'
  );

  static readonly Relaciones = F(
    'Consejos e información sobre todos los temas relacionados con las relaciones y el amor',
    'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80',
    'hombre y mujer bailando en el centro de los árboles'
  );

  static readonly Pareja = F(
    'Consejo para las parejas que quien ser mejores amigos',
    'https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    'mujer cabalgando sobre la espalda del hombre'
  );

  static readonly Tecnología = F(
    'Aquí encontrarás información útil y recursos sobre las últimas tendencias y desarrollos en el mundo de la tecnología.',
    'https://images.unsplash.com/photo-1623425484828-7eccb29713a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80',
    'Un ratón de ordenador encima de un escritorio junto a un par de gafas'
  );

  static readonly Smartphone = F(
    'Estoy encantado de que hayas decidido visitar este espacio donde podrás encontrar consejos y trucos sobre cómo solucionar problemas comunes con tu smartphone.',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    'Smartphone blanco cerca del portátil'
  );

  static readonly 'Diseño web' = F(
    'Aquí encontrarás información sobre el diseño web, desde conceptos básicos hasta conceptos avanzados.',
    'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'Hombre usando el ordenador de Apple'
  );

  static readonly 'Desarrollo web' = F(
    'Esta sección está destinada a ayudar a desarrolladores web principiantes a mejorar sus habilidades y conocimientos, proporcionando tutoriales, consejos y recursos útiles.',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'Se encendió el ordenador portátil gris'
  );

  static readonly 'Desarrollo de software' = F(
    'Aquí encontrarás todo lo relacionado con el desarrollo de software, desde principios básicos hasta técnicas avanzadas. Si tienes alguna pregunta, no dudes en contactarme.',
    'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'Teclado de ordenador negro'
  );

  static readonly 'Bienestar' = F(
    'Descubre el camino hacia una vida plena y equilibrada en nuestro blog de bienestar. Exploramos prácticas de autocuidado, consejos para una mente y cuerpo saludables, y te guiaremos en el viaje hacia el bienestar integral.',
    'https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'mujer estirándose en la cima de la montaña durante el amanecer'
  );

  static readonly 'Emociones' = F(
    'Las emociones son nuestra paleta de vida. Explora con nosotros el poder y la profundidad de cada sentimiento en este espacio dedicado a comprender y gestionar nuestras emociones.',
    'https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'una mujer mirando por una ventana con persianas'
  );

  static readonly 'Autoestima' = F(
    'Descubre el camino hacia una autoestima saludable y empoderadora. Exploramos consejos prácticos, reflexiones inspiradoras y herramientas efectivas para fortalecer tu confianza y amor propio.',
    'https://images.unsplash.com/photo-1559608622-d443df453289?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Mujer formando corazón con ambas manos.'
  );

  static readonly 'Cultura' = F(
    'Sumérgete en la riqueza cultural a través de perspectivas frescas y reflexiones. Un viaje vibrante a través de la diversidad y expresiones artísticas.',
    'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'templo marrón y verde en la cima de la montaña durante el día'
  );

  static readonly 'Actualidad y psicología' = F(
    'Explorando el fascinante cruce entre actualidad y psicología: descubre perspectivas innovadoras y reflexiones profundas para entender el mundo en constante cambio.',
    'https://images.unsplash.com/photo-1518731429075-f91c8025641e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Foto de enfoque selectivo de una persona poniendo la mano sobre la puesta de sol.'
  );

  static readonly 'Historias y reflexiones' = F(
    'Relatos e reflexiones que inspiran y emocionan. Un espacio donde las historias se unen con reflexiones profundas, invitándote a descubrir nuevas perspectivas y crecimiento personal.',
    'https://images.unsplash.com/photo-1506610758197-2a3e315ea0a9?q=80&w=3048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Mujer con chaqueta de punto gris sosteniendo una taza'
  );
}

enum Conten {
  'Tecnología' = 'Tecnología',
  'Smartphone' = 'Smartphone',
  'Diseño web' = 'Diseño web',
  'Desarrollo web' = 'Desarrollo web',
  'Desarrollo de software' = 'Desarrollo de software',
  'Psicología' = 'Psicología',
  'Psicología crítica' = 'Psicología crítica',
  'Psicología positiva' = 'Psicología positiva',
  'Filosofía' = 'Filosofía',
  'Filosofía de la religión' = 'Filosofía de la religión',
  'Finanzas' = 'Finanzas',
  'Finanzas Personales' = 'Finanzas Personales',
  'Relaciones' = 'Relaciones',
  'Pareja' = 'Pareja',
}

const seo = (prop: string) => {
  const doc = Doc[prop as Conten];

  if (doc === undefined) {
    throw new Error('This properties not fount on descriptions');
  }

  return doc;
};

export default seo;
