import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [store, setStore] = useState(initialValue);

  //wen app is load
  useEffect(() => {
    const items = localStorage.getItem(key);
    if (items === null) {
      return;
    }
    setStore(JSON.parse(items));
  }, [key]);

  //wen store change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(store));
  }, [key, store]);

  return [store, setStore] as const;
};
