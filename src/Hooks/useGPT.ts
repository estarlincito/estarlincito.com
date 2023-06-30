'use client';
import endpoint from '@/constants/endpoint';
import { GPTContext } from '@/context/gpt';
import Quote from '@/types/quote';
import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const useGPT = () => {
  const gptContext = useContext(GPTContext);

  if (gptContext === undefined) {
    throw new Error('Check if GPTContext code is corret');
  }

  const { chat, setChat } = gptContext;
  const reset = useRef<HTMLFormElement>(null);
  const smooth = useRef<HTMLDivElement>(null);
  const [quote, setquote] = useState({} as Quote);

  //handleAction
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
          question:
            get('type') === ''
              ? get('search')
              : `${get('type')}: '${get('search')}'`,
        }),
      });

      const { question, answer } = await res.json();
      setChat([...chat, { question, answer }]);
    } catch (error) {
      throw new Error('Error whent try to send new quote to local api');
    }
  };

  //copy questions or answer
  const copyChat = (text: string) => {
    navigator.clipboard.writeText(text.replaceAll('\n', ''));
    toast.success('Copied');
  };

  //reset form
  reset.current?.reset();

  //to scroll down
  useEffect(() => {
    smooth.current?.scrollTo({
      top: smooth.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [chat]);

  //Quote
  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/estarlincito/quotes001/main/src/assets/quotes.json';

    (async () => {
      try {
        const res = await fetch(url);
        const quote: Quote[] = await res.json();
        const random = Math.floor(Math.random() * quote.length);
        setquote(quote[random]);
      } catch (error) {
        throw new Error(`May the ${url} is wrong`);
      }
    })();
  }, []);

  return { handleAction, chat, reset, smooth, copyChat, quote };
};

export default useGPT;
