import Links from '@/types/links';
import { Strong } from '@radix-ui/themes';

class Seo {
  static readonly title = 'Estarlincito';
  static readonly description = 'Desarrollador Web, escritor y creador.';
  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/',
  };
  static readonly image_url = 'https://estarlincito.com/images/avatar.jpeg';
  static readonly image_alt = 'Avathar';
}

const links: Links[] = [
  {
    route: '/gpt',
    label: 'GPT001',
    target: '_self',
  },
  {
    route: 'https://github.com/estarlincito',
    label: 'Web projects!',
    target: '_blank',
  },

  {
    route: '/contact',
    label: 'Hire me!',
    target: '_self',
  },
];

const aboutme = (
  <>
    Hello, I&apos;m <Strong>Estarlin R</Strong>. I specialize in Web Design, IT
    Support, and I write about; Technology, Psychology, and more.
  </>
);

const moreinf = (
  <>
    I am a person who finds passion in psychology and software development.
    Although I have technological skills, I believe that life is a bold
    adventure, or it is nothing at all.
    <br />
    <br />
    I specialize in creating modern and user-friendly websites that work on any
    device. With experience in HTML5, CSS3, JavaScript, and libraries like React
    or frameworks like Next.js, I have worked on successful projects for clients
    worldwide and am ready for more challenges.
    <br />
    <br />I also excel in IT support, troubleshooting computer issues ranging
    from errors to operating system installations.
  </>
);

export default class Home {
  static readonly seo = { ...Seo };
  static readonly links = links;
  static readonly aboutme = aboutme;
  static readonly moreinf = moreinf;
}
