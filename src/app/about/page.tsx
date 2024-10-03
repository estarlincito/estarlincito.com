import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import About from '@/constants/about';
import SEO from '@/lib/seo';
import { Blockquote, Text } from '@radix-ui/themes';
import List from '@UI/list';
import Title from '@UI/title';

export const { metadata } = new SEO({
  title: About.seo.title,
  description: About.seo.description,
  openGraph: About.seo.openGraph,
  image_url: About.seo.image_url,
  image_alt: About.seo.image_alt,
});

const AboutPage = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <Title text={About.seo.title} />

        <Blockquote mb='7'>{About.seo.description}</Blockquote>

        <Text>{About.par1}</Text>

        <List title={About.par2} arr={About.topics} dash />
      </Wrapper>
    </Container>
  );
};

export default AboutPage;
