import Links from '@/types/links';

class Seo {
  static readonly title: 'Estarlincito';
  static readonly description = 'Desarrollador Web, escritor y creador.';
  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/',
  };
  static readonly imagesUrl = 'https://estarlincito.com/images/avatar.jpeg';
  static readonly imagesAlt = 'Avathar';
}

const links: Links[] = [
  {
    route: 'https://twitter.com/estarlincito',
    label: 'Sígueme en Twitter',
    target: '_blank',
  },
  {
    route: '/blog',
    label: 'Mira mi Blog',
    target: '_self',
  },
  {
    route: '/contact',
    label: 'Contratame',
    target: '_self',
  },
];

const aboutme = (
  <>
    Hola, soy Estarlicito. Trabajo con el <b>Diseño de páginas web</b>, escribo
    sobre <b>Tecnológia</b>,&nbsp;
    <b>Psicológia y otros temas.</b>
  </>
);

const moreinf = (
  <>
    Soy un diseñador web con más de 5 años de experiencia. Me especializo en la
    creación de sitios web modernos, interactivos, adaptados a dispositivos
    móviles y amigables para los motores de búsqueda.
    <br />
    <br />
    Utilizo las últimas tendencias y tecnologías para garantizar que mis diseños
    sean únicos, atractivos y funcionales. Disfruto buscar soluciones creativas
    a los desafíos de diseño y me apasiona encontrar formas de mejorar la
    experiencia de usuario.
    <br />
    <br />
    Me he especializado en HTML5, CSS3, JavaScript y Nextjs. Durante mi carrera
    he colaborado en muchos proyectos exitosos para clientes de todo el mundo.
    Estoy orgulloso de mi trabajo y listo para aceptar nuevos desafíos.
  </>
);

class Home {
  static readonly seo = { ...Seo };
  static readonly links = links;
  static readonly aboutme = aboutme;
  static readonly moreinf = moreinf;
}

export default Home;
