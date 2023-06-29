'use client';
import ChildrenProps from '@/types/children';
import Chat from '@/types/gpt';
import { createContext, useState } from 'react';

interface GPTContextValue {
  chat: Chat[];
  setChat: (chat: Chat[]) => void;
}

//set context
export const GPTContext = createContext({} as GPTContextValue);

//Provider context
export const GPTProvider = (props: ChildrenProps) => {
  const [chat, setChat] = useState<Chat[]>([{ answer: '', question: '' }]);

  return (
    <GPTContext.Provider value={{ chat, setChat }}>
      {props.children}
    </GPTContext.Provider>
  );
};
