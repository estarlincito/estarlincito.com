'use client';
import useLocalStorage from '@/Hooks/useLocalstorage';
import decode from '@/lib/decode';
import encode from '@/lib/encode';
import { Box } from '@radix-ui/themes';
import { useChat } from 'ai/react';
import { useEffect } from 'react';
import Styled from '../gpt.module.scss';
import Formsearch from './formsearch';
import Header from './header';
import Messages from './messages';

const Gpt = () => {
  const {
    handleInputChange,
    handleSubmit,
    isLoading,
    input,
    messages,
    setMessages,
  } = useChat();

  const [gpt001, setGpt001] = useLocalStorage(
    'gpt001',
    encode(JSON.stringify([]))
  );

  useEffect(() => {
    setGpt001(encode(JSON.stringify(messages)));
  }, [messages, setGpt001]);

  const msm = JSON.parse(decode(gpt001));

  useEffect(() => {
    console.log(msm);
    setMessages(msm);
  }, []);

  return (
    <Box className={Styled.gpt}>
      <Header messages={msm} />
      <Messages messages={msm} />
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
