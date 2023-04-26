import { Description } from '@/types';

type Key =
  | 'app'
  | 'blog'
  | 'tags'
  | 'tag'
  | 'about'
  | 'contact'
  | 'nofount'
  | 'Tecnología'
  | 'Smartphone'
  | 'Diseño web'
  | 'Desarrollo web'
  | 'Desarrollo de software'
  | 'Psicología'
  | 'Psicología crítica'
  | 'Psicología positiva'
  | 'Filosofía'
  | 'Filosofía de la religión'
  | 'dynami';

export const descriptions: (key: Key) => Description = (key: Key) => {
  switch (key) {
    case 'app':
      return 'Desarrollador Web, escritor y creador.';

    case 'blog':
      return 'Lee mis pensamientos sobre desarrollo de software, diseño web, criptomonedas y mucho más.';

    case 'tags':
      return 'Desarrollo de tecnologías como HTML, CSS, JS, React, diseño atómico para mejorar la experiencia de const usuario y más.';

    case 'tag':
      return 'Artículos informativos, consejos prácticos y enlaces a recursos útiles.';

    case 'about':
      return 'Este es un blog que explora la tecnología, la filosofía, la psicología y el desarrollo web y mucho más.';

    case 'contact':
      return 'Si está buscando ayuda para construir algo que tenga un impacto y sostenibilidad, hablemos :)';
    case 'nofount':
      return 'Esta página no existe.';

    case 'Tecnología':
      return 'Aquí encontrarás información útil y recursos sobre las últimas tendencias y desarrollos en el mundo de la tecnología.';

    case 'Smartphone':
      return 'Estoy encantado de que hayas decidido visitar este espacio donde podrás encontrar consejos y trucos sobre cómo solucionar problemas comunes con tu smartphone.';

    case 'Diseño web':
      return 'Aquí encontrarás información sobre el diseño web, desde conceptos básicos hasta conceptos avanzados.';

    case 'Desarrollo web':
      return 'Esta sección está destinada a ayudar a desarrolladores web principiantes a mejorar sus habilidades y conocimientos, proporcionando tutoriales, consejos y recursos útiles.';

    case 'Desarrollo de software':
      return 'Aquí encontrarás todo lo relacionado con el desarrollo de software, desde principios básicos hasta técnicas avanzadas. Si tienes alguna pregunta, no dudes en contactarme.';

    case 'Psicología':
      return 'Aquí encontrarás información útil sobre temas como el bienestar emocional, el desarrollo personal y la salud mental.';

    case 'Psicología crítica':
      return 'Estoy muy contento de que hayas llegado hasta aquí. Espero que encuentres información útil y valiosa sobre la psicología crítica.';

    case 'Psicología positiva':
      return 'Aquí encontrarás información sobre cómo vivir de forma más saludable y feliz, y cómo aprovechar al máximo tu mente y tu cuerpo.';

    case 'Filosofía':
      return 'Si estás buscando algo que te inspire y te ayude a reflexionar sobre tu vida y tu entorno, ¡éste es tu lugar!';

    case 'Filosofía de la religión':
      return 'Esta sección está dedicada a explorar los temas filosóficos relacionados con la religión y sus implicaciones.';
  }
  return 'Aquí encontrarás información sobre cómo vivir de forma más saludable y feliz, y cómo aprovechar al máximo tu mente y tu cuerpo.';
};
