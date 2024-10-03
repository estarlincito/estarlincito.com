class Seo {
  static readonly title = 'Acerca de Mí';

  static readonly description =
    'Este es un blog que explora la tecnología, la filosofía, la psicología y el desarrollo web y mucho más.';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/about/',
  };

  static readonly image_url = 'https://estarlincito.com/images/avatar.jpeg';
  static readonly image_alt: 'Avathar';
}

const temas = [
  'Psicología',
  'Filosofía',
  'Tecnología',
  'Privacidad en línea',
  'Desarrollo web',
  'Diseño Web',
  'SEO',
  'React',
  'Nextjs',
];

const par1 =
  'Este es un blog que explora la tecnología, la filosofía, la psicología y el desarrollo web y mucho más. Aquí encontrarás reflexiones, análisis y discusiones sobre cómo la tecnología está cambiando nuestra forma de pensar y relacionarnos con el mundo, así como su impacto en nuestra psicología y bienestar emocional.';

const par2 = 'Temas que se abordan';

export default class About {
  static readonly seo = { ...Seo };
  static readonly temas = temas;
  static readonly par1 = par1;
  static readonly par2 = par2;
}
