'use client';
import { useChat } from '@ai-sdk/react';
import { CarlyForm, type FormInput } from '@app/carly/components/form';
import { Messages } from '@app/carly/components/messages';
import { Text } from '@repo/ui/components/text';
import { useLocalStorage } from '@repo/ui/hooks/useLocalstorage';
import { Flex } from '@repo/ui/layouts/flex';
import { useEffect } from 'react';
import type { UseFormReturn } from 'react-hook-form';

export const Carly = () => {
  const { messages, setMessages, append } = useChat();

  const onSubmit = async (
    values: FormInput,
    reset: UseFormReturn<FormInput>['reset'],
  ) => {
    await append({
      content: values.message,
      role: 'user',
    });

    reset();
  };

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
      {messages.length > 0 && <Messages messages={messages} />}
      <Flex className='flex-col'>
        {messages.length === 0 && (
          <Text className='my-5 text-center text-4xl'>
            Welcome to Carly&apos;s Chat!
          </Text>
        )}
        <CarlyForm submit={onSubmit} />
      </Flex>
    </Flex>
  );
};
