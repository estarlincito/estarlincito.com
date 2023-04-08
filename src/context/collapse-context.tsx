'use client';
import { Children } from '@/types';
import { createContext, useState } from 'react';

type Collapse = 'ON' | 'OFF';
interface Context {
  collapse: Collapse;
  setCollapse: (collapse: Collapse) => void;
}

//set context
export const CollapseContext = createContext({} as Context);

//Provider context
export const CollapseProvider: React.FC<Children> = ({ children }) => {
  const [collapse, setCollapse] = useState<Collapse>('OFF');

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};
