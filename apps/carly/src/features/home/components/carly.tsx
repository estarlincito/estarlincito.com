'use client';
import { useChat } from '@ai-sdk/react';
import type { HomeContent } from '@repo/content/carly/home';
import type { FormInput } from '@repo/lib/schemas/carly';
import { Text } from '@repo/ui/components/text';
import { useLocalStorage } from '@repo/ui/hooks/useLocalstorage';
import { Flex } from '@repo/ui/layouts/flex';
import { useCallback, useEffect } from 'react';

import { CarlyForm } from '@/features/home/components/carly-form';
import { Messages } from '@/features/home/components/messages';

export const Carly = (translations: HomeContent) => {
  const { messages, setMessages, append } = useChat();

  const onSubmit = useCallback(
    async (values: FormInput) => {
      await append({
        content: values.message,
        role: 'user',
      });
    },
    [append],
  );

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

    // Getting message from search params
    const searchParams = new URLSearchParams(window.location.search);
    const message = searchParams.get('message');
    if (message) {
      if (message.length !== 0) {
        void append({
          content: message,
          role: 'user',
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (messages.length === 0) {
      return;
    }
    setStoreMessages(messages); // Save messages to localStorage whenever they change
  }, [messages, setStoreMessages]);

  return (
    <Flex className='m-auto flex-col justify-center h-full max-w-[800px]'>
      {messages.length > 0 && (
        <Messages
          messages={messages}
          successMessage={translations.toast.copy}
        />
      )}
      <Flex className='flex-col'>
        {messages.length === 0 && (
          <Text className='my-5 text-center text-4xl'>
            {translations.title}
          </Text>
        )}
        <CarlyForm submit={onSubmit} translations={translations.form} />
      </Flex>
    </Flex>
  );
};
