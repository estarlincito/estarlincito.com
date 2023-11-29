import Title from '@/components/UI/title';
import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import Metasc from '@/constants/metas';
import SEO from '@/lib/seo';
import { Blockquote, Flex, Separator } from '@radix-ui/themes';
import Card from './components/card';

export const { metadata } = new SEO({
  title: Metasc.seo.title,
  description: Metasc.seo.description,
  openGraph: Metasc.seo.openGraph,
  imagesUrl: Metasc.seo.imagesUrl,
  imagesAlt: Metasc.seo.imagesAlt,
});

const Metas = () => {
  return (
    <Container size='3'>
      <Wrapper>
        <Title text='Metas' />
        <Blockquote>{Metasc.seo.description}</Blockquote>
        <Separator size='4' />

        <Flex direction='column' gap='5'>
          {Metasc.metas.map(({ meta, motivo, id }) => (
            <Card meta={meta} motivo={motivo} key={id} />
          ))}
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default Metas;
