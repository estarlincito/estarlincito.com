'use client';

import { useEffect, useState } from 'react';

export const useClient = () => {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
};
