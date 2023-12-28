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
    principio: 'ʕ ● ᴥ ●ʔ',
    razon:
      'Este osito, lo suelo utilizar para acordarme de que debo confiar en mí más que en nadie, de que las cosas que me propongo las puedo lograr, para recordarme que vale la pena ser buena persona a pesar de las cosas malas que me pasen en la vida... (amor propio).',
    id: 1,
  },
  {
    principio: 'me',
    razon:
      'La verdad, suelo usar esa palabra para trabajar en mi interior, es como una forma de mejorar en mi crecimiento personal, recordarme a mí mismo, felicitarme, regalarme un helado, recordarme que yo estoy primero en mi vida. (amor propio).',
    id: 2,
  },
  {
    principio: 'ʕ ● ᴥ ●ʔ me',
    razon:
      'Esto en realidad es para recordarme que todo lo que necesito en la vida es amor propio para ser feliz: amor propio, para gestionar mis emociones: amor propio, baja autoestima: amor propio...',
    id: 3,
  },
  {
    principio: 'Decisiones',
    razon: '¿Afecta X tu amor propio?',
    id: 4,
  },
  {
    principio: '10 minutos al día',
    razon:
      '¿Qué tal si regalas 10 minutos solo para ti, para encontrar paz y reflexionar en meditación? (;',
    id: 5,
  },
  {
    principio: 'Ruido mental',
    razon: '¿Estás realmente presente en este momento?',
    id: 6,
  },
  {
    principio: 'No ser el amante de nadie',
    razon: 'Porque soy una persona valiosa y merezco mucho más que migajas.',
    id: 7,
  },
  {
    principio: 'No mendigues la atención de nadie y mucho menos amor',
    razon:
      'Al final es simple, la persona que te merece es aquella que teniendo la libertad de elegir, se acerca a ti, te aprecia y te dedica tiempo y pensamientos.',
    id: 8,
  },
  {
    principio: 'No corras detrás de alguien que ya sabe dónde estás',
    razon:
      'Así que uno planta su propio jardín y decora su propia alma, en lugar de esperar a que alguien le traiga flores',
    id: 9,
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
    id: 10,
  },
];

export default class Me {
  static readonly seo = { ...Seo };
  static readonly me = me;
}
