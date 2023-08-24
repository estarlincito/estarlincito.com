import List from '@/components/UI/list';
import Title from '@/components/UI/title';
import Wrapper from '@/components/wrapper';
import About from '@/constants/about';
import SEO from '@/lib/seo';
import { Blockquote, Text } from '@radix-ui/themes';

export const { metadata } = new SEO({
  title: About.seo.title,
  description: About.seo.description,
  openGraph: About.seo.openGraph,
  imagesUrl: About.seo.imagesUrl,
  imagesAlt: About.seo.imagesAlt,
});

const AboutPage = () => {
  return (
    <Wrapper>
      <Title text='Acerca de Estarlincito' />

      <Blockquote>{About.seo.description}</Blockquote>

      <Text>{About.moreinf}</Text>

      <List title={About.temeabout} arr={About.temas} dash />
    </Wrapper>
  );
};

export default AboutPage;
