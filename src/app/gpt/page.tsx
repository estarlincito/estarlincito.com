import Container from '@/components/container';
import { GPTProvider } from '@/context/gpt';
import Gpt from './components/gpt';

export const metadata = {
  title: 'Estarlincito gpt',
  description: 'If you need something help ask to gpt',
};

interface GPTPageProps {}

const GPTPage = (props: GPTPageProps) => {
  return (
    <Container className='flex justify-center'>
      <GPTProvider>
        <Gpt />
      </GPTProvider>
    </Container>
  );
};

export default GPTPage;
