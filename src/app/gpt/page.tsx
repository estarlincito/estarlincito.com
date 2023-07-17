import Container from '@/components/container';
import GPT from '@/constants/gpt';
import { GPTProvider } from '@/context/gpt';
import SEO from '@/lib/seo';
import Box from './components/box';

export const { metadata } = new SEO({
  title: GPT.seo.title,
  description: GPT.seo.description,
  openGraph: GPT.seo.openGraph,
  imagesUrl: GPT.seo.imagesUrl,
  imagesAlt: GPT.seo.imagesAlt,
});

const GPTPage = () => {
  return (
    <Container>
      <GPTProvider>
        <Box />
      </GPTProvider>
    </Container>
  );
};

export default GPTPage;
