class Seo {
  static readonly title = 'Estarlincito | Ikigai';

  static readonly description = 'Your reason for getting up every morning';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/ikigai/',
  };

  static readonly imagesUrl =
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80';

  static readonly imagesAlt = 'Hopeful Horizons';
}

const ikigai = [
  {
    principle: 'Your passion ❤️',
    details: 'What do you love?',
    id: 1,
  },

  {
    principle: 'Your profession 🎓',
    details: 'What are you good at?',
    id: 2,
  },
  {
    principle: 'Your mission 🌎',
    details: 'What does the world need?',
    id: 3,
  },
  {
    principle: 'Your vocation 💸',
    details: 'What can I earn money with?',
    id: 4,
  },
];

export default class ikigaiC {
  static readonly seo = { ...Seo };
  static readonly ikigai = ikigai;
}
