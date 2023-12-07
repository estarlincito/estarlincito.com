import Links from '@/types/links';
import { Em, Link as Link_, Strong } from '@radix-ui/themes';

class Seo {
  static readonly title = 'Estarlincito';
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
    route: 'https://github.com/estarlincito',
    label: ' Mira mis proyectos web',
    target: '_blank',
  },

  {
    route: '/contact',
    label: 'Contrátame',
    target: '_self',
  },
];

const aboutme = (
  <>
    Hello, soy <Strong>Estarlicito</Strong>. Me dedico al <Em>Diseño web</Em>
    ,&nbsp;
    <Em>Soporte IT</Em> y escribo sobre <Em>Tecnología</Em>,&nbsp;
    <Em>Psicología</Em> y más.
  </>
);

const Link = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link_ color='gray' href={href} target='_blank'>
      <Strong>{label}</Strong>
    </Link_>
  );
};

const moreinf = (
  <>
    Soy una persona que encuentra su pasión en la &nbsp;
    <Link href='https://es.wikipedia.org/wiki/Psicología' label='psicología' />
    &nbsp; y el&nbsp;
    <Link
      href='https://es.wikipedia.org/wiki/Proceso_para_el_desarrollo_de_software'
      label='desarrollo de software'
    />
    . Aunque tengo habilidades tecnológicas, pienso que la vida es una audaz
    aventura o no es nada.
    <br />
    <br />
    Me especializo en crear sitios web modernos y fáciles de usar en cualquier
    dispositivo. Con experiencia en&nbsp;
    <Link href='https://es.wikipedia.org/wiki/HTML5' label='HTML5' />
    ,&nbsp;
    <Link href='https://es.wikipedia.org/wiki/CSS' label='CSS3' />
    ,&nbsp;
    <Link href='https://es.wikipedia.org/wiki/JavaScript' label='JavaScript' />
    &nbsp;y librerías como&nbsp;
    <Link href='https://es.react.dev' label='React' />
    , he trabajado en proyectos exitosos para clientes de todo el mundo y estoy
    listo para más desafíos.
    <br />
    <br />
    También me desenvuelvo bien como&nbsp;
    <Link
      href='https://es.wikipedia.org/wiki/Soporte_técnico'
      label='Soporte IT'
    />
    , resolviendo problemas informáticos, desde errores hasta instalación de
    sistemas operativos.
  </>
);

export default class Home {
  static readonly seo = { ...Seo };
  static readonly links = links;
  static readonly aboutme = aboutme;
  static readonly moreinf = moreinf;
}
