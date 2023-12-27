import Title from '@/components/UI/title';
import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import Mec from '@/constants/me';
import SEO from '@/lib/seo';
import { Blockquote, Flex, Separator } from '@radix-ui/themes';
import Card from './components/card';

export const { metadata } = new SEO({
  title: Mec.seo.title,
  description: Mec.seo.description,
  openGraph: Mec.seo.openGraph,
  imagesUrl: Mec.seo.imagesUrl,
  imagesAlt: Mec.seo.imagesAlt,
});

const Me = () => {
  return (
    <Container size='3'>
      <Wrapper>
        <Title text='ʕ•ᴥ•ʔ me' />
        <Blockquote>{Mec.seo.description}</Blockquote>
        <Separator size='4' />

        <Flex direction='column' gap='5'>
          {Mec.me.map(({ principio, razon, id }) => (
            <Card principio={principio} razon={razon} key={id} />
          ))}
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default Me;
