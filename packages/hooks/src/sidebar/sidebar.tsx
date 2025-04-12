'use client';

import { createContext, type ReactNode, useState } from 'react';

type Sidebar = boolean;

interface SidebarContextValue {
  sidebar: Sidebar;
  setSidebar: (sidebar: Sidebar) => void;
}

// set context
export const SidebarContext = createContext({} as SidebarContextValue);

// Provider context
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useState<Sidebar>(false);

  return (
    <SidebarContext.Provider value={{ setSidebar, sidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
