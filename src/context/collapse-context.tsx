'use client';
import { ChildrenProps } from '@/types';
import { createContext, useState } from 'react';

//Types
type Collapse = 'ON' | 'OFF';

interface CollapseContextValue {
  collapse: Collapse;
  setCollapse: (collapse: Collapse) => void;
}

//set context
export const CollapseContext = createContext({} as CollapseContextValue);

//Provider context
export const CollapseProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [collapse, setCollapse] = useState<Collapse>('OFF');

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};
