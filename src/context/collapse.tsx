'use client';
import ChildrenProps from '@/types/children';
import { createContext, useState } from 'react';

type Collapse = 'ON' | 'OFF';

interface CollapseContextValue {
  collapse: Collapse;
  setCollapse: (collapse: Collapse) => void;
}

//set context
export const CollapseContext = createContext({} as CollapseContextValue);

//Provider context
export const CollapseProvider = (props: ChildrenProps) => {
  const [collapse, setCollapse] = useState<Collapse>('OFF');

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {props.children}
    </CollapseContext.Provider>
  );
};
