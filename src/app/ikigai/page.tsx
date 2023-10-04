import Title from '@/components/UI/title';
import Wrapper from '@/components/wrapper';
import ikigaiC from '@/constants/ikigai';
import SEO from '@/lib/seo';
import { Blockquote, Flex, Separator } from '@radix-ui/themes';
import Card from './components/card';

export const { metadata } = new SEO({
  title: ikigaiC.seo.title,
  description: ikigaiC.seo.description,
  openGraph: ikigaiC.seo.openGraph,
  imagesUrl: ikigaiC.seo.imagesUrl,
  imagesAlt: ikigaiC.seo.imagesAlt,
});

const Ikigai = () => {
  return (
    <Wrapper>
      <Title text='Ikigai' />
      <Blockquote>{ikigaiC.seo.description}</Blockquote>
      <Separator size='4' />

      <Flex direction='column' gap='5'>
        {ikigaiC.ikigai.map(({ principle, details, id }) => (
          <Card principle={principle} details={details} key={id} />
        ))}
      </Flex>
    </Wrapper>
  );
};

export default Ikigai;
