'use client';
import React, { createContext, useState } from 'react';

import ChildrenProps from '@/types/children';

type Collapse = boolean;

interface CollapseContextValue {
  collapse: Collapse;
  setCollapse: (collapse: Collapse) => void;
}

//set context
export const CollapseContext = createContext({} as CollapseContextValue);

//Provider context
export const CollapseProvider = ({ children }: ChildrenProps) => {
  const [collapse, setCollapse] = useState<Collapse>(false);

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};
