import { useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [store, setStore] = useState(initialValue);

  //When app is load
  useEffect(() => {
    const items = localStorage.getItem(key);
    if (items === null) {
      return;
    }

    setStore(JSON.parse(items));
  }, [key]);

  //When store change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(store));
  }, [key, store]);

  return [store, setStore] as const;
};

export default useLocalStorage;
