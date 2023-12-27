class Seo {
  static readonly title = 'Estarlincito | Me';

  static readonly description = 'Principios para conservar mi amor propio.';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/me/',
  };

  static readonly imagesUrl =
    'https://images.unsplash.com/photo-1534413298607-48ba59e8a06d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80';

  static readonly imagesAlt =
    'Go wild for this moment. Be happy for this moment. This moment is your life';
}

const me = [
  {
    principio: 'Decisiones',
    razon: '¿Afecta X tu amor propio?',
    id: 1,
  },
  {
    principio: '10 minutos al día',
    razon:
      '¿Qué tal si regalas 10 minutos solo para ti, para encontrar paz y reflexionar en meditación? (;',
    id: 2,
  },
  {
    principio: 'Ruido mental',
    razon: '¿Estás realmente presente en este momento?',
    id: 3,
  },
  {
    principio: 'No ser el amante de nadie',
    razon: 'Porque soy una persona valiosa y merezco mucho más que migajas.',
    id: 4,
  },
  {
    principio: 'No mendigues la atención de nadie y mucho menos amor',
    razon:
      'Al final es simple, la persona que te merece es aquella que teniendo la libertad de elegir, se acerca a ti, te aprecia y te dedica tiempo y pensamientos.',
    id: 5,
  },
  {
    principio: 'No corras detrás de alguien que ya sabe dónde estás',
    razon:
      'Así que uno planta su propio jardín y decora su propia alma, en lugar de esperar a que alguien le traiga flores',
    id: 6,
  },
  {
    principio: 'Si tus planes no gustan, vete solo: alguien te encontrará',
    razon:
      'Si tus planes no gustan, si tus sueños no encajan en moldes ajenos, hazlo: vete solo',
    id: 7,
  },
  {
    principio: 'El carácter exepcional de las buenas personas',
    razon:
      'Por eso, más que intentar ser diferente, intenta ser bueno, puesto que siendo bueno serás diferente.',
    id: 8,
  },
];

export default class Me {
  static readonly seo = { ...Seo };
  static readonly me = me;
}
