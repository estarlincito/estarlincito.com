class Seo {
  static readonly title = 'Acerca de Estarlincito';

  static readonly description =
    'Este es un blog que explora la tecnología, la filosofía, la psicología y el desarrollo web y mucho más.';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/about/',
  };

  static readonly imagesUrl = 'https://estarlincito.com/images/avatar.jpeg';

  static readonly imagesAlt: 'Avathar';
}

const temas = [
  'Tecnología',
  'Privacidad en línea',
  'Desarrollo web',
  'Diseño Web',
  'SEO',
  'React',
  'Nextjs',
  'Psicología',
  'Filosofía',
];

const moreinf = (
  <>
    Este es un blog que explora la tecnología, la filosofía, la psicología y el
    desarrollo web y mucho más. Aquí encontrarás reflexiones, análisis y
    discusiones sobre cómo la tecnología está cambiando nuestra forma de pensar
    y relacionarnos con el mundo, así como su impacto en nuestra psicología y
    bienestar emocional.
  </>
);

const temeabout = <>Temas que se abordan</>;

export default class About {
  static readonly seo = { ...Seo };
  static readonly temas = temas;
  static readonly moreinf = moreinf;
  static readonly temeabout = temeabout;
}
