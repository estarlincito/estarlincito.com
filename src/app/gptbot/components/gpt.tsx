'use client';
import useLocalStorage from '@/Hooks/useLocalstorage';
import decode from '@/lib/decode';
import encode from '@/lib/encode';
import { Flex } from '@radix-ui/themes';
import { Message } from 'ai';
import { useChat } from 'ai/react';
import { useEffect, useMemo } from 'react';
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

  const [gptbot, setGptbot] = useLocalStorage(
    'gptbot',
    encode(JSON.stringify(messages))
  );

  useEffect(() => {
    if (messages.length === 0) {
      return;
    }
    setGptbot(encode(JSON.stringify(messages)));
  }, [messages, setGptbot]);

  useMemo(() => {
    const msm: Message[] = JSON.parse(decode(gptbot));
    setMessages(msm);
  }, [gptbot, setMessages]);

  return (
    <Flex
      direction='column'
      justify='between'
      maxWidth='46.875rem'
      height='80vh'
      p='0.625rem'
      m='auto'
    >
      <Header messages={messages} />
      <Messages messages={messages} />
      <Formsearch
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        input={input}
        isLoading={isLoading}
      />
    </Flex>
  );
};

export default Gpt;
