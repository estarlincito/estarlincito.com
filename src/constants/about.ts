class Seo {
  static readonly title = 'About Me';

  static readonly description =
    'This is a blog that explores technology, philosophy, psychology, web development, and much more';

  static readonly openGraph = {
    type: 'website',
    url: 'https://estarlincito.com/about/',
  };

  static readonly image_url = 'https://estarlincito.com/images/avatar.jpeg';
  static readonly image_alt: 'Avathar';
}

const topics = [
  'Psychology',
  'Philosophy',
  'Technology',
  'Online Privacy',
  'Web Development',
  'Web Design',
  'SEO',
  'React',
  'Next.js',
];

const par1 =
  'This is a blog that explores technology, philosophy, psychology, web development, and much more. Here, you will find reflections, analyses, and discussions on how technology is changing the way we think and interact with the world, as well as its impact on our psychology and emotional well-being.';

const par2 = 'Topics Covered';

export default class About {
  static readonly seo = { ...Seo };
  static readonly topics = topics;
  static readonly par1 = par1;
  static readonly par2 = par2;
}
