import GPT from '@/constants/gpt';
import { GPTProvider } from '@/context/gpt';
import SEO from '@/lib/seo';
import { Box } from '@radix-ui/themes';
import Chat from './components/chat';
import Header from './components/header';
import Search from './components/search';
import Styled from './gpt.module.scss';

export const { metadata } = new SEO({
  title: GPT.seo.title,
  description: GPT.seo.description,
  openGraph: GPT.seo.openGraph,
  imagesUrl: GPT.seo.imagesUrl,
  imagesAlt: GPT.seo.imagesAlt,
});

const GPTPage = () => {
  return (
    <GPTProvider>
      <Box className={Styled.gpt}>
        <Header />
        <Chat />
        <Search />
      </Box>
    </GPTProvider>
  );
};

export default GPTPage;
