import SPEECH from '@/constants/speech';
import SEO from '@/lib/seo';
import { Container } from '@radix-ui/themes';

export const { metadata } = new SEO({
  title: SPEECH.seo.title,
  description: SPEECH.seo.description,
  openGraph: SPEECH.seo.openGraph,
  image_url: SPEECH.seo.image_url,
  image_alt: SPEECH.seo.image_alt,
});

const SpeechPage = () => {
  return (
    <Container size='3'>
      <h1>This section it&apos;s in maintenance</h1>
    </Container>
  );
};

export default SpeechPage;
