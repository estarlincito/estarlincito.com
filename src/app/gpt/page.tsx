import Container from '@/components/container';
import GPT from '@/constants/gpt';
import SEO from '@/lib/seo';
import Gpt from './components/gpt';

export const { metadata } = new SEO({
  title: GPT.seo.title,
  description: GPT.seo.description,
  openGraph: GPT.seo.openGraph,
  image_url: GPT.seo.image_url,
  image_alt: GPT.seo.image_alt,
});

const GPTPage = () => {
  return (
    <Container size='3'>
      <Gpt />
    </Container>
  );
};

export default GPTPage;
