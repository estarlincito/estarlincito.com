import Container from '@/components/container';
import { GPTProvider } from '@/context/gpt';
import Box from './components/box';

export const metadata = {
  title: 'Estarlincito | GPT',
  description: 'If you need something help ask to gpt',
};

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
