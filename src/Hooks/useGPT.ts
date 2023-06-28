'use client';
import endpoint from '@/constants/endpoint';
import { GPTContext } from '@/context/gpt';
import { useContext, useRef } from 'react';

const useGPT = () => {
  const reset = useRef<HTMLFormElement>(null);

  const gptContext = useContext(GPTContext);

  if (gptContext === undefined) {
    throw new Error('Check if GPTContext code is corret');
  }

  const { answer, setAnswer } = gptContext;

  const handleAction = async (formdata: FormData) => {
    type Name = 'search' | 'type';

    const get = (name: Name) => {
      return formdata.get(name) as string;
    };

    try {
      const res = await fetch(endpoint.gpt, {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({
          question: get('type') + get('search'),
        }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (error) {
      throw new Error('Error whent try to send new quote to local api');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(answer);
  };

  const handleReset = () => {
    reset.current?.reset();
  };

  return { handleAction, answer, reset, handleCopy, handleReset };
};

export default useGPT;
