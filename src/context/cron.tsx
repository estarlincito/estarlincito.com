'use client';
import ChildrenProps from '@/types/children';
import TCron from '@/types/cron';
import { createContext, useState } from 'react';

interface CronContextValue {
  cron: TCron[];
  setCron: (cron: TCron[]) => void;
}

//set context
export const CronContext = createContext({} as CronContextValue);

//Provider context
export const CronProvider = (props: ChildrenProps) => {
  const [cron, setCron] = useState([] as TCron[]);
  console.log(cron);
  return (
    <CronContext.Provider value={{ cron, setCron }}>
      {props.children}
    </CronContext.Provider>
  );
};
