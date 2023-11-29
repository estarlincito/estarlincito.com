class Seo {
  static readonly title = 'Estarlincito | Me';

  static readonly description = 'ʕ•ᴥ•ʔ';

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
    consejo: 'No mendigues la atención de nadie y mucho menos amor',
    razon:
      ' Al final es simple, la persona que te merece es aquella que teniendo la libertad de elegir, se acerca a ti, te aprecia y te dedica tiempo y pensamientos.',
    id: 1,
  },
  {
    consejo: 'Si tus planes no gustan, vete solo: alguien te encontrará',
    razon:
      'Si tus planes no gustan, si tus sueños no encajan en moldes ajenos, hazlo: vete solo',
    id: 2,
  },
  {
    consejo: 'El carácter exepcional de las buenas personas',
    razon:
      'Por eso, más que intentar ser diferente, intenta ser bueno, puesto que siendo bueno serás diferente.',
    id: 3,
  },
  {
    consejo: 'Todos los problemas son iluciones de la mente',
    razon:
      'En últimas, no se trata de resolver sus problemas. Se trata de darse cuenta de que no hay problemas. Sólo situaciones que manejar o que dejar así y aceptar como parte de la condición de ser del momento presente hasta que cambien o se puedan manejar. Los problemas son creados por la mente y necesitan el tiempo para sobrevivir.',
    id: 4,
  },
];

export default class Me {
  static readonly seo = { ...Seo };
  static readonly me = me;
}
