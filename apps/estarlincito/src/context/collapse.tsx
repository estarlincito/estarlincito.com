'use client';

import { createContext, type ReactNode, useState } from 'react';

type Collapse = boolean;

interface CollapseContextValue {
  collapse: Collapse;
  setCollapse: (collapse: Collapse) => void;
}

// set context
export const CollapseContext = createContext({} as CollapseContextValue);

// Provider context
export const CollapseProvider = ({ children }: { children: ReactNode }) => {
  const [collapse, setCollapse] = useState<Collapse>(false);

  return (
    <CollapseContext.Provider value={{ collapse, setCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};
