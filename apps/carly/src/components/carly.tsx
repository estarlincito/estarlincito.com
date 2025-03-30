'use client';
import { useChat } from '@ai-sdk/react';
import { Box, Flex, Heading } from '@radix-ui/themes';
import { useEffect } from 'react';

import useLocalStorage from '@/hooks/useLocalstorage';

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
      if (storeMessages.length > 0) {
        setMessages(storeMessages); // Set initial messages from localStorage
      }
    }
  }, [storeMessages, setMessages]);

  useEffect(() => {
    if (messages.length === 0) {
      return;
    }
    setStoreMessages(messages); // Save messages to localStorage whenever they change
  }, [messages, setStoreMessages]);

  return (
    <Box height='85vh' maxWidth='800px' asChild>
      <Flex direction='column' justify='center'>
        {messages.length > 0 && <Messages messages={messages} />}
        <Flex direction='column'>
          {messages.length === 0 && (
            <Heading my='4' align='center'>
              Welcome to Carly&apos;s Chat!
            </Heading>
          )}
          <CarlyForm
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Carly;
