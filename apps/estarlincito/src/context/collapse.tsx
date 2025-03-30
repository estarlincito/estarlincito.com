'use client';
import React, { createContext, useState } from 'react';

import type ChildrenProps from '@/types/children';

type Collapse = boolean;

interface CollapseContextValue {
  collapse: Collapse;
  setCollapse: (collapse: Collapse) => void;
}

//set context
export const CollapseContext = createContext({} as CollapseContextValue);

//Provider context
export const CollapseProvider: React.FC<ChildrenProps> = (props) => {
  const [collapse, setCollapse] = useState<Collapse>(false);

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {props.children}
    </CollapseContext.Provider>
  );
};
