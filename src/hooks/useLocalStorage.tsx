/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function getStoredValue(key: string, initialValue: any) {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) return initialValue;
  if (initialValue instanceof Function) return initialValue();
  return storedValue;
}

function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
