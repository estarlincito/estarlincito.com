class Seo {
  static readonly title = 'Estarlincito | Contácto';

  static readonly description =
    'Si está buscando ayuda para construir algo que tenga un impacto y sostenibilidad, hablemos :)';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/contact/',
  };

  static readonly imagesUrl = 'https://estarlincito.com/images/avatar.jpeg';

  static readonly imagesAlt = 'Avathar';
}

const quote = '¡Construyamos algo juntos!';

const talkme = {
  main: 'Si está buscando ayuda para construir algo que tenga un impacto y sostenibilidad, hablemos&nbsp;',
  sendme: 'Envíame un correo electrónico a:',
  mailto: 'mailto:contacto@estarlincito.com',
  email: 'contacto@estarlincito.com',
  able: ' Siempre estoy aprendiendo y explorando. Con mi experiencia como Diseñador web, puedo ayudarte a materializar tus ideas innovadoras con Información, análisis y monitoreo tecnológico completos.',
  general:
    'En general, mi trabajo se centra en la consulta, la innovación, solución de problemas tecnológicos y la educación:',

  list: [
    'Diseñador Web',
    'Soporte Técnico',
    'Hacker Ético',
    'Educador Tecnológico',
  ],

  hello: 'Si solo quieres saludar, Hazme un&nbsp;',

  twitterlink: 'https://twitter.com/estarlincito',
};

class Contact {
  static readonly seo = { ...Seo };
  static readonly quote = quote;
  static readonly talkme = talkme;
}

export default Contact;
