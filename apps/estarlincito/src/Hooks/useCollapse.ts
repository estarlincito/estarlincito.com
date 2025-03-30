'use client';
import { useContext } from 'react';

import { CollapseContext } from '@/context/collapse';

interface Return {
  collapse: boolean;
  toggleCollapse: () => void;
}

const useCollapse = (): Return => {
  const collapseContext = useContext(CollapseContext);

  const { collapse, setCollapse } = collapseContext;

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return { collapse, toggleCollapse };
};

export default useCollapse;
