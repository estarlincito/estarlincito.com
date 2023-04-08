import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [store, setStore] = useState(initialValue);

  //wen app is load
  useEffect(() => {
    if (localStorage.getItem(key)) {
      setStore(localStorage.getItem(key) as T);
    }
  }, [key]);

  //wen store change
  useEffect(() => {
    const value = typeof store !== 'string' ? JSON.stringify(store) : store;
    localStorage.setItem(key, value);
  }, [key, store]);

  return [store, setStore] as const;
};
