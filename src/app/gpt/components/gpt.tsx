'use client';
import useLocalStorage from '@/Hooks/useLocalstorage';
import decode from '@/lib/decode';
import encode from '@/lib/encode';
import { Box } from '@radix-ui/themes';
import { Message } from 'ai';
import { useChat } from 'ai/react';
import { useEffect, useMemo, useState } from 'react';
import Styled from '../gpt.module.scss';
import Formsearch from './formsearch';
import Header from './header';
import Messages from './messages';

const Gpt = () => {
  const { handleInputChange, handleSubmit, isLoading, input, messages } =
    useChat();
  const [storeMsm, setStoreMsm] = useState(messages);

  const [gpt001, setGpt001] = useLocalStorage(
    'gpt001',
    encode(JSON.stringify(messages))
  );

  useEffect(() => {
    if (messages.length === 0) {
      return;
    }
    setGpt001(encode(JSON.stringify(messages)));
  }, [messages, setGpt001]);

  useMemo(() => {
    const msm: Message[] = JSON.parse(decode(gpt001));
    //remove function of get intelligent chat, because the maximum character is 4000 tokens
    setStoreMsm(msm);
  }, [gpt001]);

  return (
    <Box className={Styled.gpt}>
      <Header messages={storeMsm} />
      <Messages messages={storeMsm} />
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
