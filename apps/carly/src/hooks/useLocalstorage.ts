import { Base64 } from '@estarlincito/utils';
import React, { useEffect, useState } from 'react';

type Return<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const useLocalStorage = <T>(key: string, initialValue: T): Return<T> => {
  const [store, setStore] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    const items = localStorage.getItem(key);

    if (!items) {
      return initialValue;
    }

    return JSON.parse(Base64.decode(items)) as T;
  });

  useEffect(() => {
    localStorage.setItem(key, Base64.encode(JSON.stringify(store)));
  }, [key, store]);

  return [store, setStore];
};

export default useLocalStorage;
