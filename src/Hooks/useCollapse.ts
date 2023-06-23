'use client';
import { CollapseContext } from '@/context/collapse';
import { useContext } from 'react';

const useCollapse = () => {
  const collapseContext = useContext(CollapseContext);

  if (collapseContext === undefined) {
    throw new Error('Check if CollapseContext code is corret');
  }

  const { collapse, setCollapse } = collapseContext;

  const OnCollapse = () => {
    collapse === 'OFF' ? setCollapse('ON') : null;
  };

  const offCollapse = () => {
    collapse === 'ON' ? setCollapse('OFF') : null;
  };

  return { collapse, OnCollapse, offCollapse };
};

export default useCollapse;
