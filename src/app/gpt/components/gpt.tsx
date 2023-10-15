'use client';
import { Box } from '@radix-ui/themes';
import { useChat } from 'ai/react';
import Styled from '../gpt.module.scss';
import Formsearch from './formsearch';
import Header from './header';
import Messages from './messages';

const Gpt = () => {
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

export default Gpt;
