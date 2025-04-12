import { useContext } from 'react';

import { SidebarContext } from './sidebar.jsx';

interface Return {
  sidebar: boolean;
  toggleSidebar: () => void;
}

export const useSidebar = (): Return => {
  const sidebarContext = useContext(SidebarContext);

  const { sidebar, setSidebar } = sidebarContext;

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return { sidebar, toggleSidebar };
};
