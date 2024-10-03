//Firts add the type from './types/categories';

import Content from './types/categories';

class Doc {
  static readonly 'Philosophy' = {
    description:
      'If you are looking for something that inspires you and helps you reflect on your life and surroundings, this is your place!',
    image_url:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image_alt: 'A collection of books on a wooden shelf.',
  };

  static readonly 'Philosophy of Religion' = {
    description:
      'This section is dedicated to exploring philosophical themes related to religion and its implications.',
    image_url:
      'https://images.unsplash.com/photo-1586187672953-a000e463fce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    image_alt: 'Silhouette of palm trees during sunset',
  };

  static readonly 'Philosophy of Life and Spirituality' = {
    description:
      'Seeks meaning, divine connection, and reflects on consciousness, morality, and harmony.',
    image_url:
      'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    image_alt: 'Hanging decor in various colors',
  };

  static readonly 'Finance' = {
    description:
      'I hope you find all the information you need to make smart decisions about your finances.',
    image_url:
      'https://images.unsplash.com/photo-1634474588578-7f0565a1cea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    image_alt: 'A man in a suit writing on a tablet',
  };

  static readonly 'Personal Finance' = {
    description:
      'Here you will find useful tips on how to manage your finances and achieve your financial goals.',
    image_url:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    image_alt: 'Black Android smartphone',
  };

  static readonly 'Psychology' = {
    description:
      'Here you will find useful information on topics such as emotional well-being, personal development, and mental health.',
    image_url:
      'https://images.unsplash.com/photo-1586807480822-0e95ba6666ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image_alt: 'People forming a heart with their hands',
  };

  static readonly 'Critical Psychology' = {
    description:
      'I am very glad you made it here. I hope you find useful and valuable information about critical psychology.',
    image_url:
      'https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image_alt: 'Woman in a long-sleeve black shirt using a MacBook',
  };

  static readonly 'Positive Psychology' = {
    description:
      'Here you will find information on how to live a healthier and happier life and how to make the most of your mind and body.',
    image_url:
      'https://images.unsplash.com/photo-1608055997373-383bebd42f41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image_alt: 'Relaxed woman holding a mobile phone',
  };

  static readonly 'Personality Psychology' = {
    description:
      'Dive into the fascinating world of human uniqueness through personality psychology.',
    image_url:
      'https://images.pexels.com/photos/7176297/pexels-photo-7176297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image_alt: 'Client listening to a psychologist',
  };

  static readonly 'Current events and psychology' = {
    description:
      'Dive into the fascinating world of human uniqueness through current events and psychology.',
    image_url:
      'https://images.pexels.com/photos/7176297/pexels-photo-7176297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    image_alt: 'Client listening to a psychologist',
  };

  static readonly 'Relationships' = {
    description:
      'Tips and information on all topics related to relationships and love.',
    image_url:
      'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80',
    image_alt: 'Man and woman dancing in the center of the trees',
  };

  static readonly 'Couple' = {
    description: 'Advice for couples who want to be best friends',
    image_url:
      'https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    image_alt: 'Woman riding on the man’s back',
  };

  static readonly 'Technology' = {
    description:
      'Here you will find useful information and resources about the latest trends and developments in the world of technology.',
    image_url:
      'https://images.unsplash.com/photo-1623425484828-7eccb29713a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80',
    image_alt: 'A computer mouse on a desk next to a pair of glasses',
  };

  static readonly 'Smartphone' = {
    description:
      'I am glad you decided to visit this space where you can find tips and tricks on how to troubleshoot common issues with your smartphone.',
    image_url:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    image_alt: 'White smartphone next to a laptop',
  };

  static readonly 'Web Design' = {
    description:
      'Here you will find information about web design, from basic concepts to advanced concepts.',
    image_url:
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image_alt: 'Man using an Apple computer',
  };

  static readonly 'Web Development' = {
    description:
      'This section is intended to help beginner web developers improve their skills and knowledge by providing tutorials, tips, and useful resources.',
    image_url:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image_alt: 'Gray laptop turned on',
  };

  static readonly 'Software Development' = {
    description:
      'Here you will find everything related to software development, from basic principles to advanced techniques. If you have any questions, feel free to contact me.',
    image_url:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    image_alt: 'Black computer keyboard',
  };

  static readonly 'Wellness' = {
    description:
      'Discover the path to a full and balanced life in our wellness blog. We explore self-care practices, tips for a healthy mind and body, and guide you on the journey to holistic wellness.',
    image_url:
      'https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_alt: 'Woman stretching at the top of a mountain during sunrise',
  };

  static readonly 'Emotions' = {
    description:
      'Emotions are our palette of life. Explore with us the power and depth of each feeling in this space dedicated to understanding and managing our emotions.',
    image_url:
      'https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_alt: 'A woman looking out of a window with blinds',
  };

  static readonly 'Self-Esteem' = {
    description:
      'Discover the path to healthy and empowering self-esteem. We explore practical tips, inspiring reflections, and effective tools to strengthen your confidence and self-love.',
    image_url:
      'https://images.unsplash.com/photo-1559608622-d443df453289?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_alt: 'Woman forming a heart with both hands.',
  };

  static readonly 'Culture' = {
    description:
      'Dive into cultural richness through fresh perspectives and reflections. A vibrant journey through diversity and artistic expressions.',
    image_url:
      'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_alt: 'Brown and green temple on top of a mountain during the day',
  };

  static readonly 'Current Affairs and Psychology' = {
    description:
      'Exploring the fascinating intersection of current affairs and psychology: discover innovative perspectives and deep reflections to understand the constantly changing world.',
    image_url:
      'https://images.unsplash.com/photo-1518731429075-f91c8025641e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_alt:
      'Photo of selective focus of a person putting their hand over the sunset.',
  };

  static readonly 'Stories and Reflections' = {
    description:
      'Stories and reflections that inspire and move. A space where stories blend with deep reflections, inviting you to discover new perspectives and personal growth.',
    image_url:
      'https://images.unsplash.com/photo-1506610758197-2a3e315ea0a9?q=80&w=3048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    image_alt: 'Woman in a gray knit jacket holding a cup',
  };

  static readonly 'Reflections' = {
    description:
      'Here you will find some of my reflections and lessons I have learned from life.',
    image_url:
      'https://cdn.pixabay.com/photo/2021/06/10/05/03/man-6325009_1280.jpg',
    image_alt: 'Young person reflecting',
  };
}

const seo = (prop: string) => {
  const doc = Doc[prop as Content];

  if (doc === undefined) {
    throw new Error('This properties not fount on descriptions');
  }

  return doc;
};

export default seo;
