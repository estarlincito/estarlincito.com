class Seo {
  static readonly title = 'Estarlincito CRON001';

  static readonly description =
    'Here you can set your timer and get an email notification once your timer has completed!';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/cron/',
  };

  static readonly imagesUrl = 'https://estarlincito.com/images/avatar.jpeg';

  static readonly imagesAlt: 'Avathar';
}

export default class CRON {
  static readonly seo = { ...Seo };
}
