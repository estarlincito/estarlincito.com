const options: { value: string; label: string }[] = [
  { value: '', label: 'None' },
  { value: 'spelling', label: 'Spelling' },
  { value: 'fix', label: 'Fix' },
  { value: 'this in Spanish', label: 'This in Spanish' },
  { value: 'this in English', label: 'This in English' },
  { value: 'que significa', label: 'Que significa?' },
];

class Seo {
  static readonly title = 'Estarlincito | GptBot';

  static readonly description = 'If you need help, ask for help!';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/gptbot/',
  };

  static readonly image_url =
    'https://images.unsplash.com/photo-1633311905139-7b6088a69e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80';

  static readonly image_alt = 'a yellow letter sitting on top of a black floor';
}

export default class GPT {
  static readonly seo = { ...Seo };
  static readonly options = options;
}
