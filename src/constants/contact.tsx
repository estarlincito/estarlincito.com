class Seo {
  static readonly title = 'Estarlincito | Contact';

  static readonly description =
    "If you're looking for help building something impactful and sustainable, let's talk :)";

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/contact/',
  };

  static readonly image_url = 'https://estarlincito.com/images/avatar.jpeg';

  static readonly image_alt = 'Avathar';
}

const quote = "Let's create together!";

const talkme = {
  main: (
    <>
      If you&apos;re looking for help building something impactful and
      sustainable, let&apos;s talk!&nbsp;&nbsp;
    </>
  ),
  sendme: <>Email me at:</>,
  mailto: 'mailto:contact@estarlincito.com',
  email: <>contact@estarlincito.com</>,
  able: (
    <>
      I&apos;m always learning and exploring. With my experience as a web
      designer, I can help you bring your innovative ideas to life with
      comprehensive information, analysis, and technological monitoring.
    </>
  ),
  general: (
    <>
      In general, my work focuses on consulting, innovation, technological
      problem-solving, and education.
    </>
  ),

  list: [
    'Web Designer',
    'Technical Support',
    'Ethical Hacker',
    'Tech Educator',
  ],
  hello: <>If you just want to say hello, send me a&nbsp;</>,

  twitterlink: 'https://twitter.com/estarlincito',
};

export default class Contact {
  static readonly seo = { ...Seo };
  static readonly quote = quote;
  static readonly talkme = talkme;
}
