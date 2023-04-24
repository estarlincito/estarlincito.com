'use client';
import { ChildrenProps, Collapse, CollapseContextValue } from '@/types';
import { createContext, useState } from 'react';

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
