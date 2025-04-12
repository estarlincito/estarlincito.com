'use client';
import { useChat } from '@ai-sdk/react';
import { num } from '@estarlincito/utils';
import { useLocalStorage } from '@repo/hooks';
import { Box, Flex, Title } from '@repo/ui';
import { useEffect } from 'react';

import CarlyForm from './form';
import Messages from './messages';

const Carly = () => {
  const {
    handleInputChange,
    handleSubmit,
    isLoading,
    input,
    messages,
    setMessages,
  } = useChat();

  const [storeMessages, setStoreMessages] = useLocalStorage(
    'storeMessages',
    messages,
  );

  // Initially load messages from localStorage
  useEffect(() => {
    if (storeMessages) {
      if (storeMessages.length > num('0')) {
        setMessages(storeMessages); // Set initial messages from localStorage
      }
    }
  }, [storeMessages, setMessages]);

  useEffect(() => {
    if (messages.length === num('0')) {
      return;
    }
    setStoreMessages(messages); // Save messages to localStorage whenever they change
  }, [messages, setStoreMessages]);

  return (
    <Box asChild height='85vh' maxWidth='800px'>
      <Flex direction='column' justify='center'>
        {messages.length > num('0') && <Messages messages={messages} />}
        <Flex direction='column'>
          {messages.length === num('0') && (
            <Title align='center' my='4'>
              Welcome to Carly&apos;s Chat!
            </Title>
          )}
          <CarlyForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            input={input}
            isLoading={isLoading}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Carly;
