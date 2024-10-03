class Seo {
  static readonly title = 'Estarlincito | SPEECH001';

  static readonly description = 'Text to Speech';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/speech/',
  };

  static readonly image_url =
    'https://cdn.pixabay.com/photo/2023/07/28/02/48/ai-8154299_1280.png';

  static readonly image_alt = 'Ai Artificial Intelligence Circuit Board';
}

export default class GPT {
  static readonly seo = { ...Seo };
}
