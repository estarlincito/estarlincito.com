import Container from '@/components/container';
import GPT from '@/constants/gpt';
import SEO from '@/lib/seo';
import Gpt from './components/gpt';

export const { metadata } = new SEO({
  title: GPT.seo.title,
  description: GPT.seo.description,
  openGraph: GPT.seo.openGraph,
  imagesUrl: GPT.seo.imagesUrl,
  imagesAlt: GPT.seo.imagesAlt,
});

const GPTPage = () => {
  return (
    <Container size='3'>
      <Gpt />
    </Container>
  );
};

export default GPTPage;
