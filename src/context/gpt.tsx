'use client';
import ChildrenProps from '@/types/children';
import { createContext, useState } from 'react';

interface GPTContextValue {
  answer: string;
  setAnswer: (answer: string) => void;
}

//set context
export const GPTContext = createContext({} as GPTContextValue);

//Provider context
export const GPTProvider = (props: ChildrenProps) => {
  const [answer, setAnswer] = useState('');

  return (
    <GPTContext.Provider value={{ answer, setAnswer }}>
      {props.children}
    </GPTContext.Provider>
  );
};
