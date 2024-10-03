'use client';
import ChildrenProps from '@/types/children';
import Messages from '@/types/gpt';
import { createContext, useState } from 'react';

interface GPTContextValue {
  chat: Messages[];
  // eslint-disable-next-line no-unused-vars
  setChat: (chat: Messages[]) => void;
}

//set context
export const GPTContext = createContext({} as GPTContextValue);

//Provider context
export const GPTProvider = (props: ChildrenProps) => {
  const [chat, setChat] = useState<Messages[]>([]);

  return (
    <GPTContext.Provider value={{ chat, setChat }}>
      {props.children}
    </GPTContext.Provider>
  );
};
