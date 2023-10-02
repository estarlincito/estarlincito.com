'use client';
import GPT from '@/constants/gpt';
import SEO from '@/lib/seo';
import { Box } from '@radix-ui/themes';
import { useChat } from 'ai/react';
import Formsearch from './components/formsearch';
import Header from './components/header';
import Messages from './components/messages';
import Styled from './gpt.module.scss';

export const { metadata } = new SEO({
  title: GPT.seo.title,
  description: GPT.seo.description,
  openGraph: GPT.seo.openGraph,
  imagesUrl: GPT.seo.imagesUrl,
  imagesAlt: GPT.seo.imagesAlt,
});

const GPTPage = () => {
  const { handleInputChange, handleSubmit, isLoading, input, messages } =
    useChat();

  return (
    <Box className={Styled.gpt}>
      <Header messages={messages} />
      <Messages messages={messages} />
      <Formsearch
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default GPTPage;
